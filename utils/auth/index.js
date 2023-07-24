const passport = require('passport');

const localStrategy = require('./strategy/localStrategy');

passport.use(localStrategy)
