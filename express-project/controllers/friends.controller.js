const model = require('../models/friends.model')

function addFriends(req, res){
    if(!req.body.name){
        return res.status(400).json({message: 'Name is required'});
    }
    const newFriend = {
        id: model.length,
        name: req.body.name
    };

    model.push(newFriend);
    res.json(newFriend);
}

function allFriend(req, res) {
    res.json(model);
}

function friendById(req, res){
    console.log("Here");
    const firendId = req.params.id;
    const friend = model[firendId];
    if(friend){
        res.json(friend);
    }else{
        res.status(404).send('Not Found');
    }
}

module.exports = {
    addFriends,
    allFriend,
    friendById
}