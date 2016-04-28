"use strict";
var express = require('express');
var path = require('path');
var port = 8080;
var app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
