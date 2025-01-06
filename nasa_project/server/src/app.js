const express = require('express');
const planerRouter = require('./routes/planets/planets.router');
const app = express();


app.use(express.json());
app.use(planerRouter);

module.exports = app;