import {Component, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {TimeLog} from "../../model/TimeLog";
import {TimeLogsService} from "../../services/time-logs.service";
import {Router} from "angular2/router";

@Component({
    selector: 'time-logs',
    template: `
        <div class="row">
            <h1>Time Logs</h1>
        </div>
        <div class="row">
        <table class="table table-bordered table-striped">
            <tr>
                <th>#</th> 
                <th>Description</th> 
                <th>Time in minutes</th> 
                <th>Actions</th>
            </tr>
            <tr *ngFor="#timeLog of timeLogs">
                <th scope="row">{{timeLog.id}}</th> 
                <td>{{timeLog.description}}</td> 
                <td>{{formatTime(timeLog.timeInMinutes)}} </td>
                <td><span (click)="editTimeLog(timeLog)" class="col-sm-2">Edit</span><span (click)="deleteTimeLog(timeLog)" class="col-sm-2">Delete</span></td>
            </tr>
        </table>
        </div>
        <div class="row">
            <span class="col-sm-2 col-md-offset-6">Total:</span>
            <span class="col-sm-2">{{formatTime(total)}}</span>
        </div>
    `,
    directives: [NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [TimeLogsService]
})

export class TimeLogsComponent implements OnInit {
    timeLogs: TimeLog[];
    total:number;
    totalLabel:string;

    constructor(private _router: Router, private _timeLogsService: TimeLogsService) { }

    ngOnInit () {
        this.getTimeLogs();
    }

    getTimeLogs() {
        this.timeLogs = this._timeLogsService.getTimeLogs();
        this.total = _.reduce(this.timeLogs, function(summ, timeLog){
             return summ + timeLog.timeInMinutes;
        }, 0);
        console.log(this.total);
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
        this._router.navigate( ['AddTimeLog', {id: timeLog.id}] );
    }
}