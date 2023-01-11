const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();

router.post("/:email/:password", loginController)

module.exports = router;