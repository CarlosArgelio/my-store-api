const boom = require('@hapi/boom');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if (apiKey === config.apiKey) {
        next();
    } else {
        next(boom.unauthorized());
    }
}

function checkAdminRole(...roles) {
    const user = req.user;
    if (user.role === 'admin') {
        next();
    } else {
        next(boom.forbidden());
    }
}

module.exports = { checkApiKey, checkAdminRole }
