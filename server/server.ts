import express = require('express');
import path = require('path');
var port: number = 8080;
var app = express();
var compression = require('compression');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
import {TimeLog} from "./models/timelog.mongoose.model";

mongoose.connect('mongodb://localhost/angular-test');

app.use(compression());
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/app.html'));
};

app.get('/api/timelogs', function (req, res) {
    TimeLog.find(function (err, timeLogs) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json({data:timeLogs}); // return all timelogs in JSON format
    });
});

// create todo and send back all todos after creation
app.post('/api/timelogs', function (req, res) {
    // create a todo, information comes from AJAX request from Angular
    TimeLog.findOneAndUpdate({_id: req.body._id ? req.body._id : new mongoose.mongo.ObjectID()}, {
        description: req.body.description,
        timeInMinutes: req.body.timeInMinutes
    }, {upsert:true}, function (err, timelog) {
        if (err)
            res.send(err);

        res.json(timelog);
    });

});

// delete a todo
app.delete('/api/timelogs/delete/:timelogId', function (req, res) {
    console.log(req.params.timelogId);
    TimeLog.remove({
        _id: req.params.timelogId
    }, function (err) {
        if (err)
            res.send(err);
        
        res.send(req.params.timelogId);
    });
});

app.get('/api/timelogs', function (req, res) {
    res.json({data:[
        {"id": "1", "description": "Installing Node JS", "timeInMinutes": 5},
        {"id": "2", "description": "Setting up project", "timeInMinutes": 20},
        {"id": "3", "description": "Install typescript", "timeInMinutes": 10},
        {"id": "4", "description": "Install angular2", "timeInMinutes": 20},
        {"id": "5", "description": "Write simple server in typescript", "timeInMinutes": 10},
        {"id": "6", "description": "Configuring Gulp", "timeInMinutes": 60},
        {"id": "7", "description": "Reading about System JS", "timeInMinutes": 20},
        {"id": "8", "description": "Gulp less and minify", "timeInMinutes": 20},
        {"id": "9", "description": "Typescript major detour", "timeInMinutes": 90},
        {"id": "10", "description": "Angular app setup", "timeInMinutes": 60},
        {"id": "11", "description": "Base url routing problem in node", "timeInMinutes": 40},
        {"id": "12", "description": "Figuring out typescript errors which doesn’t affect the app working", "timeInMinutes": 60},
        {"id": "13", "description": "Lodash import", "timeInMinutes": 15},
        {"id": "14", "description": "Installing bootstrap (ng2-bootstrap)", "timeInMinutes": 90},
        {"id": "15", "description": "Setting up bootstrap layout", "timeInMinutes": 40},
        {"id": "16", "description": "Tried to connect ng2-table plugin", "timeInMinutes": 30},
        {"id": "17", "description": "Writing code for angular 2 app", "timeInMinutes": 240}
    ]});
});

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});