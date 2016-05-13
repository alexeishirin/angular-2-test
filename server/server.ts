import express = require('express');
import path = require('path');
var port: number = 8080;
var app = express();
var connect = require('connect');
var compression = require('compression');

app.use(compression());
app.use(express.static(path.resolve(__dirname, '../public/dist')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../public/dist/app.html'));
};

app.get('/api/timelogs', function (req, res) {
    res.json({data:[
        {"id": 1, "description": "Installing Node JS", "timeInMinutes": 5},
        {"id": 2, "description": "Setting up project", "timeInMinutes": 20},
        {"id": 3, "description": "Install typescript", "timeInMinutes": 10},
        {"id": 4, "description": "Install angular2", "timeInMinutes": 20},
        {"id": 5, "description": "Write simple server in typescript", "timeInMinutes": 10},
        {"id": 6, "description": "Configuring Gulp", "timeInMinutes": 60},
        {"id": 7, "description": "Reading about System JS", "timeInMinutes": 20},
        {"id": 8, "description": "Gulp less and minify", "timeInMinutes": 20},
        {"id": 9, "description": "Typescript major detour", "timeInMinutes": 90},
        {"id": 10, "description": "Angular app setup", "timeInMinutes": 60},
        {"id": 11, "description": "Base url routing problem in node", "timeInMinutes": 40},
        {"id": 12, "description": "Figuring out typescript errors which doesn’t affect the app working", "timeInMinutes": 60},
        {"id": 13, "description": "Lodash import", "timeInMinutes": 15},
        {"id": 14, "description": "Installing bootstrap (ng2-bootstrap)", "timeInMinutes": 90},
        {"id": 15, "description": "Setting up bootstrap layout", "timeInMinutes": 40},
        {"id": 16, "description": "Tried to connect ng2-table plugin", "timeInMinutes": 30},
        {"id": 17, "description": "Writing code for angular 2 app", "timeInMinutes": 240}
    ]});
});

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});