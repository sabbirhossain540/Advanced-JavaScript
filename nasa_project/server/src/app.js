const express = require('express');
const cors = require('cors');

const path = require("path");
const app = express();
const morgan = require('morgan');

const planerRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));



app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planerRouter);
app.use(launchesRouter);

module.exports = app;