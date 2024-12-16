const request = require('./request');
const response = require('./response');

function makeRequest(url, data){
    request.send(url, data);
    return response.read('ss.com', 'hello World');

}

const  a = makeRequest('http://127.0.0.1:5000/', 'sddssdsd');
console.log(a);