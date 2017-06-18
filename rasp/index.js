let express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    mqReader = require('./MqListener');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mqReader.listen();

// let schema = readSchema("http://localhost:50159", "/?");
// mqReader.read(schema);

module.exports = app;
