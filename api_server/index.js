const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:auth/auth');
//env zawiera aktualne paramtry srodowiska (argv - argumenty)
const PORT = process.env.PORT || 3000;

const app = express();

// standardowy format apache - logi
app.use(morgan("combined"));
// obsluguje json i dowolny format (application/json - default)
app.use(bodyParser.json({type: "*/*"}));
router(app);

const server = http.createServer(app);

server.listen(PORT);
