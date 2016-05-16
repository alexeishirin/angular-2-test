var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("model/timelog.model", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeLog;
    return {
        setters:[],
        execute: function() {
            TimeLog = (function () {
                function TimeLog() {
                }
                return TimeLog;
            }());
            exports_1("TimeLog", TimeLog);
        }
    }
});
System.register("services/timelogs.service", ['angular2/core', 'angular2/http', 'rxjs/Rx', "lodash"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, http_1, _;
    var TimeLogsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {
                _ = _2;
            }],
        execute: function() {
            TimeLogsService = (function () {
                function TimeLogsService(http) {
                    this.http = http;
                    this._timelogsAPIUrl = 'api/timelogs';
                    this.timeLogs = { data: [] };
                }
                ;
                TimeLogsService.prototype.getTimeLogs = function () {
                    if (_.isEmpty(this.timeLogs.data)) {
                        this._getTimeLogs();
                    }
                };
                TimeLogsService.prototype._getTimeLogs = function () {
                    var _this = this;
                    // this.timeLogs.timeLogs = [{"id": 1, "description": "Installing Node JS", "timeInMinutes": 5}];
                    this.http.get(this._timelogsAPIUrl)
                        .map(this.extractData)
                        .subscribe(function (timeLogs) {
                        _this.timeLogs.data = timeLogs;
                        console.log(_this.timeLogs);
                    });
                };
                TimeLogsService.prototype.getTimeLog = function (id) {
                    return _.find(this.timeLogs.data, { id: id });
                };
                TimeLogsService.prototype.editTimeLog = function (timeLog) {
                    timeLog.timeInMinutes = +timeLog.timeInMinutes;
                    if (timeLog.id) {
                        var timeLogToEdit = _.find(this.timeLogs.data, { id: timeLog.id });
                        _.assign(timeLogToEdit, timeLog);
                    }
                    else {
                        var newId = _.maxBy(this.timeLogs.data, 'id').id + 1;
                        _.assign(timeLog, { id: newId });
                        this.timeLogs.data.push(timeLog);
                    }
                };
                TimeLogsService.prototype.deleteTimeLog = function (timeLog) {
                    _.remove(this.timeLogs.data, timeLog);
                };
                TimeLogsService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || [];
                };
                TimeLogsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TimeLogsService);
                return TimeLogsService;
            }());
            exports_2("TimeLogsService", TimeLogsService);
        }
    }
});
System.register("components/timeLogs/edit-timelog.component", ['angular2/core', "model/timelog.model", "services/timelogs.service", 'angular2/router', "ng2-material/all"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, timelog_model_1, timelogs_service_1, router_1, all_1;
    var EditTimeLogComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (timelog_model_1_1) {
                timelog_model_1 = timelog_model_1_1;
            },
            function (timelogs_service_1_1) {
                timelogs_service_1 = timelogs_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            EditTimeLogComponent = (function () {
                function EditTimeLogComponent(_routeParams, _router, _timeLogsService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._timeLogsService = _timeLogsService;
                    this.model = new timelog_model_1.TimeLog();
                    this.submitted = false;
                }
                EditTimeLogComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this._timeLogsService.editTimeLog(this.model);
                    this._router.navigate(['TimeLogs']);
                };
                EditTimeLogComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    if (id === 'new') {
                        return;
                    }
                    var timeLogById = this._timeLogsService.getTimeLog(+id);
                    if (timeLogById) {
                        this.model = timeLogById;
                    }
                };
                EditTimeLogComponent = __decorate([
                    core_2.Component({
                        selector: 'add-time-log',
                        template: "<md-progress-linear mode=\"indeterminate\"></md-progress-linear>\n<md-card><form (ngSubmit)=\"onSubmit()\" #timeLogForm=\"ngForm\">\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Description</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\" required>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Time</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.timeInMinutes\" required >\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Add Time Log</button>\n        </div>\n    </div>\n</form></md-card>\n",
                        directives: [all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, timelogs_service_1.TimeLogsService])
                ], EditTimeLogComponent);
                return EditTimeLogComponent;
            }());
            exports_3("EditTimeLogComponent", EditTimeLogComponent);
        }
    }
});
System.register("components/timeLogs/timelogs.component", ['angular2/core', 'angular2/common', "services/timelogs.service", "angular2/router"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, common_1, timelogs_service_2, router_2;
    var TimeLogsComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (timelogs_service_2_1) {
                timelogs_service_2 = timelogs_service_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            TimeLogsComponent = (function () {
                function TimeLogsComponent(_router, _timeLogsService) {
                    this._router = _router;
                    this._timeLogsService = _timeLogsService;
                    this.timeLogs = _timeLogsService.timeLogs;
                }
                TimeLogsComponent.prototype.ngOnInit = function () {
                    this.getTimeLogs();
                };
                TimeLogsComponent.prototype.getTimeLogs = function () {
                    this._timeLogsService.getTimeLogs();
                    // .subscribe(function(heroes) {return this.timeLogs = heroes});
                    // this.timeLogs = this._timeLogsService.getTimeLogs();
                    // this.total = _.reduce(this.timeLogs, function(summ, timeLog){
                    //      return summ + timeLog.timeInMinutes;
                    // }, 0);
                    // console.log(this.total);
                };
                TimeLogsComponent.prototype.showTotalTime = function () {
                    return this.formatTime(_.reduce(this.timeLogs.data, function (summ, timeLog) {
                        return summ + timeLog.timeInMinutes;
                    }, 0));
                };
                TimeLogsComponent.prototype.formatTime = function (timeInMinutes) {
                    var timeString = "";
                    var hours = Math.floor(timeInMinutes / 60);
                    if (hours) {
                        timeString += hours + " hour";
                        timeString += hours > 1 ? "s " : " ";
                    }
                    if (timeInMinutes % 60) {
                        timeString += timeInMinutes % 60 + " minutes";
                    }
                    return timeString;
                };
                TimeLogsComponent.prototype.deleteTimeLog = function (timeLog) {
                    this._timeLogsService.deleteTimeLog(timeLog);
                };
                TimeLogsComponent.prototype.editTimeLog = function (timeLog) {
                    this._router.navigate(['AddTimeLog', { id: timeLog.id }]);
                };
                TimeLogsComponent = __decorate([
                    core_3.Component({
                        selector: 'time-logs',
                        template: "\n        <div class=\"row\">\n            <h1>Time Logs</h1>\n        </div>\n        <div class=\"row\">\n        <table class=\"table table-bordered table-striped\">\n            <tr>\n                <th>#</th> \n                <th>Description</th> \n                <th>Time in minutes</th> \n                <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"#timeLog of timeLogs.data\">\n                <th scope=\"row\">{{timeLog.id}}</th> \n                <td>{{timeLog.description}}</td> \n                <td>{{formatTime(timeLog.timeInMinutes)}} </td>\n                <td><span (click)=\"editTimeLog(timeLog)\" class=\"col-sm-2\">Edit</span><span (click)=\"deleteTimeLog(timeLog)\" class=\"col-sm-2\">Delete</span></td>\n            </tr>\n        </table>\n        </div>\n        <div class=\"row\">\n            <span class=\"col-sm-2 col-md-offset-6\">Total:</span>\n            <span class=\"col-sm-2\">{{showTotalTime()}}</span>\n        </div>\n    ",
                        directives: [common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, timelogs_service_2.TimeLogsService])
                ], TimeLogsComponent);
                return TimeLogsComponent;
            }());
            exports_4("TimeLogsComponent", TimeLogsComponent);
        }
    }
});
System.register("components/app/app.component", ['angular2/core', 'angular2/router', "services/timelogs.service", 'ng2-bootstrap/ng2-bootstrap', "components/timeLogs/edit-timelog.component", "components/timeLogs/timelogs.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, router_3, timelogs_service_3, ng2_bootstrap_1, edit_timelog_component_1, timelogs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (timelogs_service_3_1) {
                timelogs_service_3 = timelogs_service_3_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (edit_timelog_component_1_1) {
                edit_timelog_component_1 = edit_timelog_component_1_1;
            },
            function (timelogs_component_1_1) {
                timelogs_component_1 = timelogs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_timeLogsService) {
                    this._timeLogsService = _timeLogsService;
                    this.status = { isopen: false };
                    this.disabled = false;
                    this.timeLogs = _timeLogsService.timeLogs;
                    console.log("We are up and running!");
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.status.isopen = !this.status.isopen;
                };
                AppComponent = __decorate([
                    router_3.RouteConfig([
                        { path: '/timeLogs', component: timelogs_component_1.TimeLogsComponent, as: 'TimeLogs', useAsDefault: true },
                        { path: '/add/:id', component: edit_timelog_component_1.EditTimeLogComponent, as: 'AddTimeLog' },
                    ]),
                    core_4.Component({
                        selector: 'my-app',
                        template: "\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n<div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Angular 2</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <form class=\"navbar-form navbar-right\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </form>\n        </div>\n      </div>\n    </nav>\n<div class=\"container-fluid top-menu-margin\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle [disabled]=\"disabled\">\n      Button dropdown <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n    </ul>\n  </div>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n",
                        directives: [router_3.ROUTER_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        providers: [timelogs_service_3.TimeLogsService]
                    }), 
                    __metadata('design:paramtypes', [timelogs_service_3.TimeLogsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
System.register("bootstrap", ['angular2/platform/browser', 'angular2/platform/common', 'angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', "components/app/app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var browser_1, common_2, core_5, common_3, router_4, http_2, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_4.ROUTER_PROVIDERS,
                common_3.CORE_DIRECTIVES,
                http_2.HTTP_PROVIDERS,
                core_5.provide(common_2.LocationStrategy, { useClass: common_2.PathLocationStrategy })
            ]);
        }
    }
});
System.register("mock-time-logs", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var TIME_LOGS;
    return {
        setters:[],
        execute: function() {
            exports_7("TIME_LOGS", TIME_LOGS = [
                { "id": 1, "description": "Installing Node JS", "timeInMinutes": 5 },
                { "id": 2, "description": "Setting up project", "timeInMinutes": 20 },
                { "id": 3, "description": "Install typescript", "timeInMinutes": 10 },
                { "id": 4, "description": "Install angular2", "timeInMinutes": 20 },
                { "id": 5, "description": "Write simple server in typescript", "timeInMinutes": 10 },
                { "id": 6, "description": "Configuring Gulp", "timeInMinutes": 60 },
                { "id": 7, "description": "Reading about System JS", "timeInMinutes": 20 },
                { "id": 8, "description": "Gulp less and minify", "timeInMinutes": 20 },
                { "id": 9, "description": "Typescript major detour", "timeInMinutes": 90 },
                { "id": 10, "description": "Angular app setup", "timeInMinutes": 60 },
                { "id": 11, "description": "Base url routing problem in node", "timeInMinutes": 40 },
                { "id": 12, "description": "Figuring out typescript errors which doesn’t affect the app working", "timeInMinutes": 60 },
                { "id": 13, "description": "Lodash import", "timeInMinutes": 15 },
                { "id": 14, "description": "Installing bootstrap (ng2-bootstrap)", "timeInMinutes": 90 },
                { "id": 15, "description": "Setting up bootstrap layout", "timeInMinutes": 40 },
                { "id": 16, "description": "Tried to connect ng2-table plugin", "timeInMinutes": 30 },
                { "id": 17, "description": "Writing code for angular 2 app", "timeInMinutes": 240 }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3RpbWVsb2cubW9kZWwudHMiLCJzZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiYm9vdHN0cmFwLnRzIiwibW9jay10aW1lLWxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsNkJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1FEO2dCQUNJLHlCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRXZCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO29CQUN6QyxhQUFRLEdBQWtCLEVBQUMsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDO2dCQUhKLENBQUM7O2dCQUtuQyxxQ0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQUEsaUJBUUM7b0JBUEcsaUdBQWlHO29CQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO3lCQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDckIsU0FBUyxDQUFDLFVBQUMsUUFBUTt3QkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxD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RSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLGtDQUFrQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ2xGLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUscUVBQXFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDckgsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDL0QsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxzQ0FBc0MsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUN0RixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLDZCQUE2QixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQzdFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbkYsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFDO2FBQ3BGLENBQUEsQ0FBQyIsImZpbGUiOiJkaXN0L2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lTG9nIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGltZUluTWludXRlczogbnVtYmVyO1xyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7VGltZUxvZ30gZnJvbSBcIi4uL21vZGVsL3RpbWVsb2cubW9kZWxcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lTG9nc0RhdGEge1xyXG4gICAgZGF0YTogVGltZUxvZ1tdO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lTG9nc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge307XHJcblxyXG4gICAgcHJpdmF0ZSBfdGltZWxvZ3NBUElVcmwgPSAnYXBpL3RpbWVsb2dzJztcclxuICAgIHRpbWVMb2dzIDogVGltZUxvZ3NEYXRhID0ge2RhdGEgOiBbXX07XHJcblxyXG4gICAgZ2V0VGltZUxvZ3MoKSB7XHJcbiAgICAgICAgaWYoXy5pc0VtcHR5KHRoaXMudGltZUxvZ3MuZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0VGltZUxvZ3MoKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGltZUxvZ3MoKSB7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lTG9ncy50aW1lTG9ncyA9IFt7XCJpZFwiOiAxLCBcImRlc2NyaXB0aW9uXCI6IFwiSW5zdGFsbGluZyBOb2RlIEpTXCIsIFwidGltZUluTWludXRlc1wiOiA1fV07XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLl90aW1lbG9nc0FQSVVybClcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh0aW1lTG9ncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lTG9ncy5kYXRhID0gdGltZUxvZ3M7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpbWVMb2dzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFRpbWVMb2coaWQgOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMudGltZUxvZ3MuZGF0YSwge2lkOiBpZH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlZGl0VGltZUxvZyh0aW1lTG9nIDogVGltZUxvZykge1xyXG4gICAgICAgIHRpbWVMb2cudGltZUluTWludXRlcyA9ICt0aW1lTG9nLnRpbWVJbk1pbnV0ZXM7XHJcbiAgICAgICAgaWYodGltZUxvZy5pZCkge1xyXG4gICAgICAgICAgICB2YXIgdGltZUxvZ1RvRWRpdCA9IF8uZmluZCh0aGlzLnRpbWVMb2dzLmRhdGEsIHtpZDogdGltZUxvZy5pZH0pO1xyXG4gICAgICAgICAgICBfLmFzc2lnbih0aW1lTG9nVG9FZGl0LCB0aW1lTG9nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3SWQgPSBfLm1heEJ5KHRoaXMudGltZUxvZ3MuZGF0YSwgJ2lkJykuaWQgKyAxO1xyXG4gICAgICAgICAgICBfLmFzc2lnbih0aW1lTG9nLCB7aWQ6IG5ld0lkfSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxvZ3MuZGF0YS5wdXNoKHRpbWVMb2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlVGltZUxvZyh0aW1lTG9nIDogVGltZUxvZykge1xyXG4gICAgICAgIF8ucmVtb3ZlKHRoaXMudGltZUxvZ3MuZGF0YSwgdGltZUxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwgW107XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUaW1lTG9nfSBmcm9tIFwiLi4vLi4vbW9kZWwvdGltZWxvZy5tb2RlbFwiO1xyXG5pbXBvcnQge1RpbWVMb2dzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXRpbWUtbG9nJyxcclxuICAgIHRlbXBsYXRlOmA8bWQtcHJvZ3Jlc3MtbGluZWFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tZC1wcm9ncmVzcy1saW5lYXI+XHJcbjxtZC1jYXJkPjxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgI3RpbWVMb2dGb3JtPVwibmdGb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMiBmb3JtLWNvbnRyb2wtbGFiZWxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibW9kZWwuZGVzY3JpcHRpb25cIiByZXF1aXJlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTIgZm9ybS1jb250cm9sLWxhYmVsXCI+VGltZTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibW9kZWwudGltZUluTWludXRlc1wiIHJlcXVpcmVkID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPkFkZCBUaW1lIExvZzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT48L21kLWNhcmQ+XHJcbmAsXHJcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRUaW1lTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1vZGVsID0gbmV3IFRpbWVMb2coKTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl90aW1lTG9nc1NlcnZpY2UuZWRpdFRpbWVMb2codGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVGltZUxvZ3MnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVQYXJhbXM6Um91dGVQYXJhbXMsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3RpbWVMb2dzU2VydmljZTpUaW1lTG9nc1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgICAgaWYgKGlkID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdmFyIHRpbWVMb2dCeUlkID0gdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2coK2lkKTtcclxuICAgICAgICBpZiAodGltZUxvZ0J5SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRpbWVMb2dCeUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE5nQ2xhc3MsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7VGltZUxvZ30gZnJvbSBcIi4uLy4uL21vZGVsL3RpbWVsb2cubW9kZWxcIjtcclxuaW1wb3J0IHtUaW1lTG9nc1NlcnZpY2UsIFRpbWVMb2dzRGF0YX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aW1lLWxvZ3MnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxoMT5UaW1lIExvZ3M8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD4jPC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5UaW1lIGluIG1pbnV0ZXM8L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN0aW1lTG9nIG9mIHRpbWVMb2dzLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7dGltZUxvZy5pZH19PC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGQ+e3t0aW1lTG9nLmRlc2NyaXB0aW9ufX08L3RkPiBcclxuICAgICAgICAgICAgICAgIDx0ZD57e2Zvcm1hdFRpbWUodGltZUxvZy50aW1lSW5NaW51dGVzKX19IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gKGNsaWNrKT1cImVkaXRUaW1lTG9nKHRpbWVMb2cpXCIgY2xhc3M9XCJjb2wtc20tMlwiPkVkaXQ8L3NwYW4+PHNwYW4gKGNsaWNrKT1cImRlbGV0ZVRpbWVMb2codGltZUxvZylcIiBjbGFzcz1cImNvbC1zbS0yXCI+RGVsZXRlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLXNtLTIgY29sLW1kLW9mZnNldC02XCI+VG90YWw6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1zbS0yXCI+e3tzaG93VG90YWxUaW1lKCl9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmdDbGFzcywgTmdJZiwgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUxvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGltZUxvZ3M6IFRpbWVMb2dzRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfdGltZUxvZ3NTZXJ2aWNlOiBUaW1lTG9nc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpbWVMb2dzID0gX3RpbWVMb2dzU2VydmljZS50aW1lTG9ncztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUaW1lTG9ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVMb2dzKCkge1xyXG4gICAgICAgIHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgICAgICAvLyAuc3Vic2NyaWJlKGZ1bmN0aW9uKGhlcm9lcykge3JldHVybiB0aGlzLnRpbWVMb2dzID0gaGVyb2VzfSk7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lTG9ncyA9IHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgIC8vIHRoaXMudG90YWwgPSBfLnJlZHVjZSh0aGlzLnRpbWVMb2dzLCBmdW5jdGlvbihzdW1tLCB0aW1lTG9nKXtcclxuICAgICAgICAvLyAgICAgIHJldHVybiBzdW1tICsgdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG90YWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93VG90YWxUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpbWUoXy5yZWR1Y2UodGhpcy50aW1lTG9ncy5kYXRhLCBmdW5jdGlvbihzdW1tLCB0aW1lTG9nKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gc3VtbSArIHRpbWVMb2cudGltZUluTWludXRlcztcclxuICAgICAgICAgICAgfSwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWUodGltZUluTWludXRlcykge1xyXG4gICAgICAgIHZhciB0aW1lU3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVJbk1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgaWYoaG91cnMpIHtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyArIFwiIGhvdXJcIjtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyA+IDEgPyBcInMgXCIgOiBcIiBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRpbWVJbk1pbnV0ZXMgJSA2MCl7XHJcbiAgICAgICAgICAgIHRpbWVTdHJpbmcgKz0gdGltZUluTWludXRlcyAlIDYwICsgXCIgbWludXRlc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGltZUxvZyh0aW1lTG9nKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmRlbGV0ZVRpbWVMb2codGltZUxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRpbWVMb2codGltZUxvZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWydBZGRUaW1lTG9nJywge2lkOiB0aW1lTG9nLmlkfV0gKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtUaW1lTG9nc1NlcnZpY2UsIFRpbWVMb2dzRGF0YX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEUk9QRE9XTl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuXHJcbmltcG9ydCB7RWRpdFRpbWVMb2dDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL2VkaXQtdGltZWxvZy5jb21wb25lbnQnXHJcbmltcG9ydCB7VGltZUxvZ3NDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL3RpbWVsb2dzLmNvbXBvbmVudCdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy90aW1lTG9ncycsIGNvbXBvbmVudDogVGltZUxvZ3NDb21wb25lbnQsIGFzOiAnVGltZUxvZ3MnLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAge3BhdGg6ICcvYWRkLzppZCcsIGNvbXBvbmVudDogRWRpdFRpbWVMb2dDb21wb25lbnQsIGFzOiAnQWRkVGltZUxvZyd9LFxyXG5dKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkFuZ3VsYXIgMjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBbcm91dGVyTGlua109XCJbJ1RpbWVMb2dzJ11cIj5UaW1lIExvZ3M8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgW3JvdXRlckxpbmtdPVwiWydBZGRUaW1lTG9nJywge2lkOiduZXcnfV1cIj5BZGQgVGltZSBMb2c8L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgdG9wLW1lbnUtbWFyZ2luXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1tZC0yIHNpZGViYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnVGltZUxvZ3MnXVwiPlRpbWUgTG9nczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBbcm91dGVyTGlua109XCJbJ0FkZFRpbWVMb2cnLCB7aWQ6J25ldyd9XVwiPkFkZCBUaW1lIExvZzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiBkcm9wZG93biBbKGlzT3BlbildPVwic3RhdHVzLmlzb3BlblwiPlxyXG4gICAgPGJ1dHRvbiBpZD1cInNpbmdsZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkcm9wZG93blRvZ2dsZSBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgQnV0dG9uIGRyb3Bkb3duIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWxsZWRieT1cInNpbmdsZS1idXR0b25cIj5cclxuICAgICAgPGxpIHJvbGU9XCJtZW51aXRlbVwiPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgIDxsaSByb2xlPVwibWVudWl0ZW1cIj48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgIDxsaSByb2xlPVwibWVudWl0ZW1cIj48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlciBkcm9wZG93bi1kaXZpZGVyXCI+PC9saT5cclxuICAgICAgPGxpIHJvbGU9XCJtZW51aXRlbVwiPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC1zbS1vZmZzZXQtMyBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0yIG1haW5cIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEUk9QRE9XTl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW1RpbWVMb2dzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aW1lTG9nczpUaW1lTG9nc0RhdGE7XHJcbiAgICBwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGltZUxvZ3NTZXJ2aWNlOlRpbWVMb2dzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGltZUxvZ3MgPSBfdGltZUxvZ3NTZXJ2aWNlLnRpbWVMb2dzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHVwIGFuZCBydW5uaW5nIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXHJcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbidcclxuaW1wb3J0IHtwcm92aWRlfSAgICBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQge1JPVVRFUl9CSU5ESU5HUywgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIENPUkVfRElSRUNUSVZFUyxcclxuICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5fSlcclxuXSk7IiwiaW1wb3J0IHtUaW1lTG9nfSBmcm9tICcuL21vZGVsL3RpbWVsb2cubW9kZWwnO1xyXG5leHBvcnQgdmFyIFRJTUVfTE9HUzogVGltZUxvZ1tdID0gW1xyXG4gICAge1wiaWRcIjogMSwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGxpbmcgTm9kZSBKU1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogNX0sXHJcbiAgICB7XCJpZFwiOiAyLCBcImRlc2NyaXB0aW9uXCI6IFwiU2V0dGluZyB1cCBwcm9qZWN0XCIsIFwidGltZUluTWludXRlc1wiOiAyMH0sXHJcbiAgICB7XCJpZFwiOiAzLCBcImRlc2NyaXB0aW9uXCI6IFwiSW5zdGFsbCB0eXBlc2NyaXB0XCIsIFwidGltZUluTWludXRlc1wiOiAxMH0sXHJcbiAgICB7XCJpZFwiOiA0LCBcImRlc2NyaXB0aW9uXCI6IFwiSW5zdGFsbCBhbmd1bGFyMlwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogNSwgXCJkZXNjcmlwdGlvblwiOiBcIldyaXRlIHNpbXBsZSBzZXJ2ZXIgaW4gdHlwZXNjcmlwdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMTB9LFxyXG4gICAge1wiaWRcIjogNiwgXCJkZXNjcmlwdGlvblwiOiBcIkNvbmZpZ3VyaW5nIEd1bHBcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDYwfSxcclxuICAgIHtcImlkXCI6IDcsIFwiZGVzY3JpcHRpb25cIjogXCJSZWFkaW5nIGFib3V0IFN5c3RlbSBKU1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogOCwgXCJkZXNjcmlwdGlvblwiOiBcIkd1bHAgbGVzcyBhbmQgbWluaWZ5XCIsIFwidGltZUluTWludXRlc1wiOiAyMH0sXHJcbiAgICB7XCJpZFwiOiA5LCBcImRlc2NyaXB0aW9uXCI6IFwiVHlwZXNjcmlwdCBtYWpvciBkZXRvdXJcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDkwfSxcclxuICAgIHtcImlkXCI6IDEwLCBcImRlc2NyaXB0aW9uXCI6IFwiQW5ndWxhciBhcHAgc2V0dXBcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDYwfSxcclxuICAgIHtcImlkXCI6IDExLCBcImRlc2NyaXB0aW9uXCI6IFwiQmFzZSB1cmwgcm91dGluZyBwcm9ibGVtIGluIG5vZGVcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDQwfSxcclxuICAgIHtcImlkXCI6IDEyLCBcImRlc2NyaXB0aW9uXCI6IFwiRmlndXJpbmcgb3V0IHR5cGVzY3JpcHQgZXJyb3JzIHdoaWNoIGRvZXNu4oCZdCBhZmZlY3QgdGhlIGFwcCB3b3JraW5nXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiAxMywgXCJkZXNjcmlwdGlvblwiOiBcIkxvZGFzaCBpbXBvcnRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDE1fSxcclxuICAgIHtcImlkXCI6IDE0LCBcImRlc2NyaXB0aW9uXCI6IFwiSW5zdGFsbGluZyBib290c3RyYXAgKG5nMi1ib290c3RyYXApXCIsIFwidGltZUluTWludXRlc1wiOiA5MH0sXHJcbiAgICB7XCJpZFwiOiAxNSwgXCJkZXNjcmlwdGlvblwiOiBcIlNldHRpbmcgdXAgYm9vdHN0cmFwIGxheW91dFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogNDB9LFxyXG4gICAge1wiaWRcIjogMTYsIFwiZGVzY3JpcHRpb25cIjogXCJUcmllZCB0byBjb25uZWN0IG5nMi10YWJsZSBwbHVnaW5cIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDMwfSxcclxuICAgIHtcImlkXCI6IDE3LCBcImRlc2NyaXB0aW9uXCI6IFwiV3JpdGluZyBjb2RlIGZvciBhbmd1bGFyIDIgYXBwXCIsIFwidGltZUluTWludXRlc1wiOiAyNDB9XHJcbl07Il19
