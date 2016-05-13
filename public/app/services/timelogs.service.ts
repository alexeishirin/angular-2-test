import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {TimeLog} from "../model/timelog.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import * as _ from "lodash";

export interface TimeLogsData {
    data: TimeLog[];
}

@Injectable()
export class TimeLogsService {
    constructor (private http: Http) {};

    private _timelogsAPIUrl = 'api/timelogs';
    timeLogs : TimeLogsData = {data : []};

    getTimeLogs() {
        if(_.isEmpty(this.timeLogs.data)) {
            this._getTimeLogs();
        }        
    }

    _getTimeLogs() {
        // this.timeLogs.timeLogs = [{"id": 1, "description": "Installing Node JS", "timeInMinutes": 5}];
        this.http.get(this._timelogsAPIUrl)
            .map(this.extractData)
            .subscribe((timeLogs) => {
                this.timeLogs.data = timeLogs;
                console.log(this.timeLogs);
            });
    }
    
    getTimeLog(id : number) {
        return _.find(this.timeLogs.data, {id: id});
    }
    
    editTimeLog(timeLog : TimeLog) {
        timeLog.timeInMinutes = +timeLog.timeInMinutes;
        if(timeLog.id) {
            var timeLogToEdit = _.find(this.timeLogs.data, {id: timeLog.id});
            _.assign(timeLogToEdit, timeLog);
        } else {
            var newId = _.maxBy(this.timeLogs.data, 'id').id + 1;
            _.assign(timeLog, {id: newId});
            this.timeLogs.data.push(timeLog);
        }
    }
    
    deleteTimeLog(timeLog : TimeLog) {
        _.remove(this.timeLogs.data, timeLog);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || [];
    }
}