const { validationResult } = require("express-validator");
module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ message : "Please Enter the valid email" });
  }
  next()
};
