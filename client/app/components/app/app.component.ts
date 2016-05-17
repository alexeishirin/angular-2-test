import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {TimeLogsService, TimeLogsData} from "../../services/timelogs.service";
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {EditTimeLogComponent} from '../timeLogs/edit-timelog.component';
import {TimeLogsComponent} from '../timeLogs/timelogs.component';

import {htmlTemplate} from './app.component.html';


@Routes([
    {path: '', component: TimeLogsComponent},
    {path: 'add/:id', component: EditTimeLogComponent},
])
@Component({
    selector: 'my-app',
    template: htmlTemplate,
    directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES],
    providers: [TimeLogsService]
})
export class AppComponent implements OnInit {
    timeLogs:TimeLogsData;
    public status:{isopen:boolean} = {isopen: false};
    disabled:boolean = false;

    constructor(private _timeLogsService:TimeLogsService) {
        this.timeLogs = _timeLogsService.timeLogs;
        
        console.log("We are up and running!");
    }

    ngOnInit() {
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

}