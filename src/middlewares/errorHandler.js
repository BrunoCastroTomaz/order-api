const errorHandler = (err, req, res, next) => {

  console.error(err);

  if (err.code === 11000) {

    return res.status(409).json({
      message: "Order already exists"
    });

  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error"
  });

};

module.exports = errorHandler;