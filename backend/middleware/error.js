const errorHandler = require("../utils/errorhandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Mongodb ObjectId format Error

  /*if (err.name === "CastError" || err.kind === "ObjectId") {
    err = errorHandler(400, "Resource not found. Invalid ObjectId format");
  }*/

  //Mongoose duplicate Key error

  if (err.code === 11000) {
    err = errorHandler(400, `Duplicate ${Object.keys(err.keyValue)} Entered`);
  }

  //JWT error

  if (err.name === "JsonWebTokenError") {
    err = errorHandler(400, "Json Web Token is Invalid, try again");
  }
  //JWT EXPIRE error

  if (err.name === "TokenExpiredError") {
    err = errorHandler(400, "Json Web Token is Expired, try again");
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
