
function getMessages(req, res) {
    res.send('hello this is Node js Message');
}

function postMessage(req, res) {
    console.log('will be updating this post message function');
}

module.exports = {
    getMessages,
    postMessage
};