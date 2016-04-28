import {Injectable} from 'angular2/core';
import {TIME_LOGS} from '../mock-time-logs';
import {TimeLog} from "../model/TimeLog";
import * as _ from "lodash";

@Injectable()
export class TimeLogsService {
    TIME_LOGS = TIME_LOGS;
    getTimeLogs() {
        return this.TIME_LOGS;
    }
    
    getTimeLog(id : number) {
        return _.find(this.TIME_LOGS, {id: id});
    }
    
    editTimeLog(timeLog : TimeLog) {
        if(timeLog.id) {
            var timeLogToEdit = _.find(this.TIME_LOGS, {id: timeLog.id});
            _.assign(timeLogToEdit, timeLog);
        } else {
            var newId = _.maxBy(this.TIME_LOGS, 'id').id + 1;
            _.assign(timeLog, {id: newId});
            this.TIME_LOGS.push(timeLog);
        }
    }
    
    deleteTimeLog(timeLog : TimeLog) {
        _.remove(this.TIME_LOGS, timeLog);
    }

}