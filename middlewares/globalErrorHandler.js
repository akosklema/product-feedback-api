module.exports = (error, req, res, next) => {
  const { message, statusCode, status } = error;

  console.log(error);

  return res.status(statusCode).json({
    status: status,
    message: message
  });
};