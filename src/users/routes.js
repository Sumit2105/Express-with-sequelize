const express = require('express');
const expressRouter = express.Router({
    mergeParams: true,
})
const userCtr = require('./controllers/userController');

expressRouter.route('/').get(userCtr.get);
expressRouter.route('/').post(userCtr.post);
expressRouter.route('/:id').put(userCtr.put);
expressRouter.route('/:id').delete(userCtr.delete);

module.exports = expressRouter;