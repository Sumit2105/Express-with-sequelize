const express = require("express");
const router = express.Router();

const userRoutes = require('../src/users/routes');

router.use('/users', userRoutes);

module.exports = router;