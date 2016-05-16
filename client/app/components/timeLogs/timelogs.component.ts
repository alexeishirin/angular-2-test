import {Component, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {TimeLog} from "../../../../server/models/timelog.model";
import {TimeLogsService, TimeLogsData} from "../../services/timelogs.service";
import {Router} from "angular2/router";

import {htmlTemplate} from './timelogs.component.html';

@Component({
    selector: 'time-logs',
    template: htmlTemplate,
    directives: [NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class TimeLogsComponent implements OnInit {
    timeLogs: TimeLogsData;

    constructor(private _router: Router, private _timeLogsService: TimeLogsService) {
        this.timeLogs = _timeLogsService.timeLogs;
    }

    ngOnInit () {
        this.getTimeLogs();
    }

    getTimeLogs() {
        this._timeLogsService.getTimeLogs();
            // .subscribe(function(heroes) {return this.timeLogs = heroes});
        // this.timeLogs = this._timeLogsService.getTimeLogs();
        // this.total = _.reduce(this.timeLogs, function(summ, timeLog){
        //      return summ + timeLog.timeInMinutes;
        // }, 0);
        // console.log(this.total);
    }
    
    showTotalTime() {
        return this.formatTime(_.reduce(this.timeLogs.data, function(summ, timeLog){
                 return summ + timeLog.timeInMinutes;
            }, 0));
    }

    formatTime(timeInMinutes) {
        var timeString = "";
        var hours = Math.floor(timeInMinutes / 60);
        if(hours) {
            timeString += hours + " hour";
            timeString += hours > 1 ? "s " : " ";
        }

        if(timeInMinutes % 60){
            timeString += timeInMinutes % 60 + " minutes";
        }

        return timeString;
    }

    deleteTimeLog(timeLog) {
        this._timeLogsService.deleteTimeLog(timeLog);
    }

    editTimeLog(timeLog) {
        this._router.navigate( ['AddTimeLog', {id: timeLog._id}] );
    }
}