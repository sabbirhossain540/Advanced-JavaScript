

const express = require("express");
const friendsController = require('../controllers/friends.controller');
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('Ip address: ', req.ip);
    next();
});

friendsRouter.post('/', friendsController.addFriends);
friendsRouter.get('/', friendsController.allFriend);
friendsRouter.get('/:id', friendsController.friendById);

module.exports = friendsRouter;