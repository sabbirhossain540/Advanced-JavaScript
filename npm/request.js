const  axios = require("axios");
const url = require("node:url");

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
.catch((error) => {
    console.log(error);
})
    .then(() => {
        console.log("All Done Here!!");
    });
