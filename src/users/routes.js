const express = require('express');
const expressRouter = express.Router({
    mergeParams: true,
})
const userCtr = require('./controllers/userController');

expressRouter.route('/').get(userCtr.get)

module.exports = expressRouter;