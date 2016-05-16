import {Component, OnInit} from 'angular2/core';
import {TimeLog} from "../../model/timelog.model";
import {TimeLogsService} from "../../services/timelogs.service";
import {Router, RouteParams} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector: 'add-time-log',
    template:`<md-progress-linear mode="indeterminate"></md-progress-linear>
<md-card><form (ngSubmit)="onSubmit()" #timeLogForm="ngForm">
    <div class="form-group row">
        <label class="col-sm-2 form-control-label">Description</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" [(ngModel)]="model.description" required>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 form-control-label">Time</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" [(ngModel)]="model.timeInMinutes" required >
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-secondary">Add Time Log</button>
        </div>
    </div>
</form></md-card>
`,
    directives:[MATERIAL_DIRECTIVES]
})

export class EditTimeLogComponent implements OnInit {
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