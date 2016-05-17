import {Component, OnInit} from '@angular/core';
import {TimeLog} from "../../../../server/models/timelog.model";
import {TimeLogsService} from "../../services/timelogs.service";
import {Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {htmlTemplate} from './edit-timelog.component.html';

@Component({
    selector: 'add-time-log',
    template: htmlTemplate,
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class EditTimeLogComponent implements OnInit {
    model = new TimeLog();
    submitted = false;

    onSubmit() {
        this.submitted = true;
        this._timeLogsService.editTimeLog(this.model);
        this._router.navigate(['timeLogs']);
    }

    constructor(private _router:Router, private _timeLogsService:TimeLogsService) {
    }

    ngOnInit() {
        var id = "1";
        if (id === 'new') {
            return;
        }
 
        var timeLogById = this._timeLogsService.getTimeLog(id);
        if (timeLogById) {
            this.model = timeLogById;
        }
    }
}