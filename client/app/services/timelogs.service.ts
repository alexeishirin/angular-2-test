import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TimeLog} from "../../../server/models/timelog.model";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from "lodash";
import { Headers, RequestOptions } from '@angular/http';

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
            .subscribe(function(timeLogs) {
                console.log(this.timeLogs);
                this.timeLogs.data = timeLogs;
                console.log(this.timeLogs);
            }.bind(this));
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
            .subscribe(function (timeLogs) {
                console.log(timeLogs);
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
            .subscribe(function (timeLogs) {
                console.log(timeLogs);
            });
    }
    
    private extractData(res: Response) {
        console.log("extracting data");
        console.log(res.json());
        var body = res.json();
        return body.data || [];
    }
}