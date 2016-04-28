import {Component, OnInit} from 'angular2/core';
import {TimeLog} from "../../model/TimeLog";
import {TimeLogsService} from "../../services/time-logs.service";
import {Router, RouteParams} from 'angular2/router'

@Component({
    selector: 'add-time-log',
    template: `
        <form (ngSubmit)="onSubmit()" #timeLogForm="ngForm">
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 form-control-label">Description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" [(ngModel)]="model.description" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 form-control-label">Time</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" [(ngModel)]="model.timeInMinutes" required >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-secondary">Add Time Log</button>
                </div>
            </div>
        </form>
    `,
    providers: [TimeLogsService]
})

export class AddTimeLogComponent implements OnInit {
    model = new TimeLog();
    submitted = false;

    onSubmit() {
        this.submitted = true;
        this._timeLogsService.editTimeLog(this.model);
        this._router.navigate(['TimeLogs']);
    }

    constructor(private _routeParams:RouteParams, private _router:Router, private _timeLogsService:TimeLogsService) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        if (id === 'new') {
            return;
        }
 
        var timeLogById = this._timeLogsService.getTimeLog(+id);
        if (timeLogById) {
            this.model = timeLogById;
        }
    }
}