const passport = require('passport');

const localStrategy = require('./strategy/localStrategy');
const JwtStrategy = require('./strategy/jwtStrategy');

passport.use(localStrategy);
passport.use(JwtStrategy);
