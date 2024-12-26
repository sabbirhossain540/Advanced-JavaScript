
const path = require('path');


function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'test.jpg'));
    //res.sendFile('test.jpg');
    //res.send('hello this is Node js Message');
}

function postMessage(req, res) {
    console.log('will be updating this post message function');
}

module.exports = {
    getMessages,
    postMessage
};