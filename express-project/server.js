const express = require('express');

const friendsRouter   = require('./router/friends.router');
const messageRouter   = require('./router/messages.router');

const app = express();
const port = 3000;


app.use((req, res, next) => {
   const start = Date.now();

   next();
   const delta = Date.now() - start;
    console.log(`${req.url}${req.url} ${delta}ms`);
});

app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})