const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authenticateUser = require('../middleware/aclMiddleware');

// Register endpoint for admin
router.post('/registerAsAdmin', authenticateUser, authController.registerAsAdmin);

module.exports = router;
