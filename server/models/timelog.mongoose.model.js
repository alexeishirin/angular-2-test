"use strict";
var mongoose = require('mongoose');
exports.TimeLogSchema = new mongoose.Schema({
    description: { type: String, required: true },
    timeInMinutes: Number,
});
exports.TimeLog = mongoose.model('TimeLog', exports.TimeLogSchema);
