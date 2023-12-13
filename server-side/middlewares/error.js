function Error(error, req, res, next) {
  switch (error.name) {
    case "SequelizeValidationError":
      const errors = error.errors.map((err) => err.message);
      res.status(400).json({
        message: errors[0],
      });
      break;
    case "SequelizeUniqueConstraintError":
      const errors2 = error.errors.map((err) => err.message);
      res.status(400).json({
        message: errors2[0],
      });
      break;
    case "Data Not Found":
      res.status(404).json({
        message: "Data Not Found",
      });
    case "Cannot Edit Product":
      res.status(404).json({
        message: "Cannot Edit Product",
      });
    default:
      res.status(500).json({
        message: "Internal Server Error",
      });
      break;
  }
}

module.exports = Error;
