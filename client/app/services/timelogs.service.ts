import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {TimeLog} from "../../../server/models/timelog.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import * as _ from "lodash";
import { Headers, RequestOptions } from 'angular2/http';

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
    
    getTimeLog(id : string) {
        return _.find(this.timeLogs.data, {_id: id});
    }
    
    editTimeLog(timeLog : TimeLog) {
        timeLog.timeInMinutes = +timeLog.timeInMinutes;
        if(timeLog._id) {
            var timeLogToEdit = _.find(this.timeLogs.data, {_id: timeLog._id});
            _.assign(timeLogToEdit, timeLog);
        } else {
            this.timeLogs.data.push(timeLog);
        }

        console.log(timeLog);
        var body = JSON.stringify(timeLog);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .post(this._timelogsAPIUrl, body, { headers: headers })
            .map(this.extractData)
            .subscribe((timeLogs) => {
                console.log(this.timeLogs);
            });;
    }
    
    deleteTimeLog(timeLog : TimeLog) {
        console.log(timeLog);
        _.remove(this.timeLogs.data, timeLog);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .delete(this._timelogsAPIUrl + '/delete/' + timeLog._id, { headers: headers })
            .map(this.extractData)
            .subscribe((timeLogs) => {
                console.log(this.timeLogs);
            });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || [];
    }
}