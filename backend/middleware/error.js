const errorHandler = require("../utils/errorhandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Mongodb ObjectId format Error

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    err = errorHandler(400, "Resource not found. Invalid ObjectId format");
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
