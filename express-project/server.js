const express = require('express');
const path = require('path');

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

// REST API  == Representational State Transfer
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        caption: "this is test page",
    });
});

app.get('/messages', (req, res) => {
    res.render('messages', {
        friend: "Albart",
    });
});


app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})