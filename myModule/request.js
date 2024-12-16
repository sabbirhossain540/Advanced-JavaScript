function encrypt(data){
    return "encrypted data";
}

function send(data, url){
    let res = encrypt(data);
    return res;
}

module.exports = {
    send
}