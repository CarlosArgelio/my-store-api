const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserService = require('./userService');
const nodemailer = require("nodemailer");
const service = new UserService();
const { config } = require('./../config/config');

class AuthService {

  async findOneUser(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    return user
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
    const token = jwt.sign(payload, config.jwt_secret);
    return {
      user,
      token
    };
  }

  async sendMail(email) {
    const user = this.findOneUser(email);

    const transporter = nodemailer.createTransport({
      host: config.host_smtp ,
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
          user: config.sender,
          pass: config.password_email
      }
    });
    await transporter.sendMail({
      from: config.sender,
      to: `${user.email}`,
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    return { message: 'mail sent' };
  }
}

module.exports = AuthService
