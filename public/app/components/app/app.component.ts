import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TimeLogsService, TimeLogsData} from "../../services/timelogs.service";


import {EditTimeLogComponent} from '../timeLogs/edit-timelog.component'
import {TimeLogsComponent} from '../timeLogs/timelogs.component'

@RouteConfig([
    {path: '/timeLogs', component: TimeLogsComponent, as: 'TimeLogs', useAsDefault: true},
    {path: '/add/:id', component: EditTimeLogComponent, as: 'AddTimeLog'},
])
@Component({
    selector: 'my-app',
    template: `
<nav class="navbar navbar-dark navbar-fixed-top bg-inverse">
      <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Project name</a>
      <div id="navbar">
        <nav class="nav navbar-nav pull-xs-left">
          <a class="nav-item nav-link" [routerLink]="['TimeLogs']">Time Logs <span class="label label-success">{{timeLogs.data.length}}</span></a>
          <a class="nav-item nav-link" [routerLink]="['AddTimeLog', {id:'new'}]">Add Time Log</a>
        </nav>
        <form class="pull-xs-right">
          <input type="text" class="form-control" placeholder="Search...">
        </form>
      </div>
    </nav>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#" [routerLink]="['TimeLogs']">Time Logs</a></li>
            <li><a href="#" [routerLink]="['AddTimeLog', {id:'new'}]">Add Time Log</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main animated fadeInRight">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [TimeLogsService]
})
export class AppComponent implements OnInit{
    timeLogs: TimeLogsData;

    constructor(private _timeLogsService: TimeLogsService) {
        this.timeLogs = _timeLogsService.timeLogs;
        console.log("We are up and running!");
    }

    ngOnInit () {
    }

}