const https = require('https');

const req = https.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    res.on('end', () => {
        console.log("No more records found");
    });
});

req.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});

req.end();
