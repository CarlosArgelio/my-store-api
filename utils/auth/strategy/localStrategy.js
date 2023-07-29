const { Strategy } = require('passport-local');
const AuthService = require('./../../../services/authService')
const service = new AuthService()

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  async (username, password, done) => {
    try {
      const user = await service.getUser(username, password)
      done(null, user)
    } catch (error) {
      done(error, false)
    }
})

module.exports = localStrategy;
