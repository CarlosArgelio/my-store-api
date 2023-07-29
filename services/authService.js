const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserService = require('./userService');
const nodemailer = require("nodemailer");
const service = new UserService();
const { config } = require('./../config/config');
const contructMails  = require('./../utils/emails')

class AuthService {

  async findOneUser(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    return user
  }

  generateToken(payload, expireIn) {
    if (expireIn) {
      const token = jwt.sign(payload, config.jwt_secret, {expiresIn: expireIn});
      return token
    } else {
      const token = jwt.sign(payload, config.jwt_secret);
      return token
    }
  }

  async getUser(email, password) {
    const user = this.findOneUser(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password
    return user
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = this.generateToken(payload, '15min')
    return {
      user,
      token
    };
  }

  async sendRecovery(email) {
    const user = await this.findOneUser(email);

    const payload = { sub: user.id }
    const token = this.generateToken(payload, '15min')

    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, {recoveryToken: token})

    const mail = contructMails(config.sender, config.sender, "Email para recuperar contrasena",
    "Ingresa a recovery password", `<b>Ingresa a este link => ${link}</b>`);
    const rta = await this.sendMail(mail);
    return rta;
  }

  async sendMail(infoEmail) {

    const transporter = nodemailer.createTransport({
      host: config.host_smtp ,
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
          user: config.sender,
          pass: config.password_email
      }
    });
    await transporter.sendMail(infoEmail);
    return { message: 'mail sent' };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwt_secret);
      const user = service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, {recoveryToken: null, password: hash})
      return { message: 'password changed' }

    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

module.exports = AuthService
