const boom = require('@hapi/boom')

function validatorHandler (Dtos, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = Dtos.validate(data);
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler
