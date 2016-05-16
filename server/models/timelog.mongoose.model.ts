import mongoose = require('mongoose');
import {ITimeLog} from "./timelog.model";

export interface ITimeLogModel extends ITimeLog, mongoose.Document {

}

export const TimeLogSchema = new mongoose.Schema({
    description: {type:String, required: true},
    timeInMinutes: Number,
});

export const TimeLog = mongoose.model<ITimeLogModel>('TimeLog', TimeLogSchema);