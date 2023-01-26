const express = require("express");
const router = express.Router();
const passport = require("passport");
const delete_education = require("../controllers/delete_education");
const Update = require("../controllers/update");

router.post(
    "/delete-education",
    passport.authenticate("jwt", {session : false}),
    delete_education
  );

  router.post(
    "/update",
    passport.authenticate("jwt", {session : false}),
    Update
  );
  module.exports = router;