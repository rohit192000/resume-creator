const express = require("express");
const router = express.Router();
const register = require("../controllers/register");

router.post(
  "/user/:name/:email/:password",
  register,

);

module.exports = router;
