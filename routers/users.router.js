const controller = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.getAllUsers);
module.exports = router;