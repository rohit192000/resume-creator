const express = require("express");
const router = express.Router();
const register = require("../controllers/register");

router.post(
  "/user/:email/:password",
  register,

);

module.exports = router;
