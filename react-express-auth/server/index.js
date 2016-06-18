/**
 * Created by leonking on 6/18/16.
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');
const config = require('./config');

// db setup
mongoose.connect(config.dbConnect);

// app setup
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

// server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:' + port);

