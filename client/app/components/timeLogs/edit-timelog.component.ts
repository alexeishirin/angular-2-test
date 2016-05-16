import {Component, OnInit} from 'angular2/core';
import {TimeLog} from "../../model/timelog.model";
import {TimeLogsService} from "../../services/timelogs.service";
import {Router, RouteParams} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {htmlTemplate} from './edit-timelog.component.html';

@Component({
    selector: 'add-time-log',
    template: htmlTemplate,
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