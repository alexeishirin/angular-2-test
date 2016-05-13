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
System.register("components/timeLogs/edit-timelog.component", ['angular2/core', "model/timelog.model", "services/timelogs.service", 'angular2/router'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, timelog_model_1, timelogs_service_1, router_1;
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
                        template: "\n<form (ngSubmit)=\"onSubmit()\" #timeLogForm=\"ngForm\">\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Description</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\" required>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Time</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.timeInMinutes\" required >\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Add Time Log</button>\n        </div>\n    </div>\n</form>\n"
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
System.register("components/app/app.component", ['angular2/core', 'angular2/router', "services/timelogs.service", "components/timeLogs/edit-timelog.component", "components/timeLogs/timelogs.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, router_3, timelogs_service_3, edit_timelog_component_1, timelogs_component_1;
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
                    this.timeLogs = _timeLogsService.timeLogs;
                    console.log("We are up and running!");
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_3.RouteConfig([
                        { path: '/timeLogs', component: timelogs_component_1.TimeLogsComponent, as: 'TimeLogs', useAsDefault: true },
                        { path: '/add/:id', component: edit_timelog_component_1.EditTimeLogComponent, as: 'AddTimeLog' },
                    ]),
                    core_4.Component({
                        selector: 'my-app',
                        template: "\n<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a class=\"nav-item nav-link\" [routerLink]=\"['TimeLogs']\">Time Logs <span class=\"label label-success\">{{timeLogs.data.length}}</span></a>\n          <a class=\"nav-item nav-link\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a>\n        </nav>\n        <form class=\"pull-xs-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </nav>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main animated fadeInRight\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n",
                        directives: [router_3.ROUTER_DIRECTIVES],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3RpbWVsb2cubW9kZWwudHMiLCJzZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiYm9vdHN0cmFwLnRzIiwibW9jay10aW1lLWxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsNkJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1FEO2dCQUNJLHlCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRXZCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO29CQUN6QyxhQUFRLEdBQWtCLEVBQUMsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDO2dCQUhKLENBQUM7O2dCQUtuQyxxQ0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQUEsaUJBUUM7b0JBUEcsaUdBQWlHO29CQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO3lCQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDckIsU0FBUyxDQUFDLFVBQUMsUUFBUTt3QkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxD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LEVBQUUsRUFBRSxhQUFhLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDN0UsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNuRixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLGdDQUFnQyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUM7YUFDcEYsQ0FBQSxDQUFDIiwiZmlsZSI6ImRpc3QvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWVMb2cge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0aW1lSW5NaW51dGVzOiBudW1iZXI7XHJcbn0iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtUaW1lTG9nfSBmcm9tIFwiLi4vbW9kZWwvdGltZWxvZy5tb2RlbFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVMb2dzRGF0YSB7XHJcbiAgICBkYXRhOiBUaW1lTG9nW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWVMb2dzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fTtcclxuXHJcbiAgICBwcml2YXRlIF90aW1lbG9nc0FQSVVybCA9ICdhcGkvdGltZWxvZ3MnO1xyXG4gICAgdGltZUxvZ3MgOiBUaW1lTG9nc0RhdGEgPSB7ZGF0YSA6IFtdfTtcclxuXHJcbiAgICBnZXRUaW1lTG9ncygpIHtcclxuICAgICAgICBpZihfLmlzRW1wdHkodGhpcy50aW1lTG9ncy5kYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUaW1lTG9ncygpIHtcclxuICAgICAgICAvLyB0aGlzLnRpbWVMb2dzLnRpbWVMb2dzID0gW3tcImlkXCI6IDEsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIE5vZGUgSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDV9XTtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuX3RpbWVsb2dzQVBJVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHRpbWVMb2dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVMb2dzLmRhdGEgPSB0aW1lTG9ncztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGltZUxvZ3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGltZUxvZyhpZCA6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy50aW1lTG9ncy5kYXRhLCB7aWQ6IGlkfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVkaXRUaW1lTG9nKHRpbWVMb2cgOiBUaW1lTG9nKSB7XHJcbiAgICAgICAgdGltZUxvZy50aW1lSW5NaW51dGVzID0gK3RpbWVMb2cudGltZUluTWludXRlcztcclxuICAgICAgICBpZih0aW1lTG9nLmlkKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lTG9nVG9FZGl0ID0gXy5maW5kKHRoaXMudGltZUxvZ3MuZGF0YSwge2lkOiB0aW1lTG9nLmlkfSk7XHJcbiAgICAgICAgICAgIF8uYXNzaWduKHRpbWVMb2dUb0VkaXQsIHRpbWVMb2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdJZCA9IF8ubWF4QnkodGhpcy50aW1lTG9ncy5kYXRhLCAnaWQnKS5pZCArIDE7XHJcbiAgICAgICAgICAgIF8uYXNzaWduKHRpbWVMb2csIHtpZDogbmV3SWR9KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lTG9ncy5kYXRhLnB1c2godGltZUxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVUaW1lTG9nKHRpbWVMb2cgOiBUaW1lTG9nKSB7XHJcbiAgICAgICAgXy5yZW1vdmUodGhpcy50aW1lTG9ncy5kYXRhLCB0aW1lTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCBbXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi8uLi9tb2RlbC90aW1lbG9nLm1vZGVsXCI7XHJcbmltcG9ydCB7VGltZUxvZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZWxvZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXRpbWUtbG9nJyxcclxuICAgIHRlbXBsYXRlOmBcclxuPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjdGltZUxvZ0Zvcm09XCJuZ0Zvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0yIGZvcm0tY29udHJvbC1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJtb2RlbC5kZXNjcmlwdGlvblwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMiBmb3JtLWNvbnRyb2wtbGFiZWxcIj5UaW1lPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJtb2RlbC50aW1lSW5NaW51dGVzXCIgcmVxdWlyZWQgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+QWRkIFRpbWUgTG9nPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9mb3JtPlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFRpbWVMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbW9kZWwgPSBuZXcgVGltZUxvZygpO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3RpbWVMb2dzU2VydmljZS5lZGl0VGltZUxvZyh0aGlzLm1vZGVsKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydUaW1lTG9ncyddKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczpSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdGltZUxvZ3NTZXJ2aWNlOlRpbWVMb2dzU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgICBpZiAoaWQgPT09ICduZXcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB2YXIgdGltZUxvZ0J5SWQgPSB0aGlzLl90aW1lTG9nc1NlcnZpY2UuZ2V0VGltZUxvZygraWQpO1xyXG4gICAgICAgIGlmICh0aW1lTG9nQnlJZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gdGltZUxvZ0J5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgTmdDbGFzcywgTmdJZn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtUaW1lTG9nfSBmcm9tIFwiLi4vLi4vbW9kZWwvdGltZWxvZy5tb2RlbFwiO1xyXG5pbXBvcnQge1RpbWVMb2dzU2VydmljZSwgVGltZUxvZ3NEYXRhfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZWxvZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RpbWUtbG9ncycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGgxPlRpbWUgTG9nczwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPiM8L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+IFxyXG4gICAgICAgICAgICAgICAgPHRoPlRpbWUgaW4gbWludXRlczwvdGg+IFxyXG4gICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3RpbWVMb2cgb2YgdGltZUxvZ3MuZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3t0aW1lTG9nLmlkfX08L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0ZD57e3RpbWVMb2cuZGVzY3JpcHRpb259fTwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgPHRkPnt7Zm9ybWF0VGltZSh0aW1lTG9nLnRpbWVJbk1pbnV0ZXMpfX0gPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48c3BhbiAoY2xpY2spPVwiZWRpdFRpbWVMb2codGltZUxvZylcIiBjbGFzcz1cImNvbC1zbS0yXCI+RWRpdDwvc3Bhbj48c3BhbiAoY2xpY2spPVwiZGVsZXRlVGltZUxvZyh0aW1lTG9nKVwiIGNsYXNzPVwiY29sLXNtLTJcIj5EZWxldGU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2wtc20tMiBjb2wtbWQtb2Zmc2V0LTZcIj5Ub3RhbDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLXNtLTJcIj57e3Nob3dUb3RhbFRpbWUoKX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0NsYXNzLCBOZ0lmLCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aW1lTG9nczogVGltZUxvZ3NEYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF90aW1lTG9nc1NlcnZpY2U6IFRpbWVMb2dzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGltZUxvZ3MgPSBfdGltZUxvZ3NTZXJ2aWNlLnRpbWVMb2dzO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLmdldFRpbWVMb2dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUxvZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2dzKCk7XHJcbiAgICAgICAgICAgIC8vIC5zdWJzY3JpYmUoZnVuY3Rpb24oaGVyb2VzKSB7cmV0dXJuIHRoaXMudGltZUxvZ3MgPSBoZXJvZXN9KTtcclxuICAgICAgICAvLyB0aGlzLnRpbWVMb2dzID0gdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2dzKCk7XHJcbiAgICAgICAgLy8gdGhpcy50b3RhbCA9IF8ucmVkdWNlKHRoaXMudGltZUxvZ3MsIGZ1bmN0aW9uKHN1bW0sIHRpbWVMb2cpe1xyXG4gICAgICAgIC8vICAgICAgcmV0dXJuIHN1bW0gKyB0aW1lTG9nLnRpbWVJbk1pbnV0ZXM7XHJcbiAgICAgICAgLy8gfSwgMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b3RhbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dUb3RhbFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VGltZShfLnJlZHVjZSh0aGlzLnRpbWVMb2dzLmRhdGEsIGZ1bmN0aW9uKHN1bW0sIHRpbWVMb2cpe1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBzdW1tICsgdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgICAgICB9LCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VGltZSh0aW1lSW5NaW51dGVzKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IodGltZUluTWludXRlcyAvIDYwKTtcclxuICAgICAgICBpZihob3Vycykge1xyXG4gICAgICAgICAgICB0aW1lU3RyaW5nICs9IGhvdXJzICsgXCIgaG91clwiO1xyXG4gICAgICAgICAgICB0aW1lU3RyaW5nICs9IGhvdXJzID4gMSA/IFwicyBcIiA6IFwiIFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGltZUluTWludXRlcyAlIDYwKXtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSB0aW1lSW5NaW51dGVzICUgNjAgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUaW1lTG9nKHRpbWVMb2cpIHtcclxuICAgICAgICB0aGlzLl90aW1lTG9nc1NlcnZpY2UuZGVsZXRlVGltZUxvZyh0aW1lTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VGltZUxvZyh0aW1lTG9nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbJ0FkZFRpbWVMb2cnLCB7aWQ6IHRpbWVMb2cuaWR9XSApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7VGltZUxvZ3NTZXJ2aWNlLCBUaW1lTG9nc0RhdGF9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuaW1wb3J0IHtFZGl0VGltZUxvZ0NvbXBvbmVudH0gZnJvbSAnLi4vdGltZUxvZ3MvZWRpdC10aW1lbG9nLmNvbXBvbmVudCdcclxuaW1wb3J0IHtUaW1lTG9nc0NvbXBvbmVudH0gZnJvbSAnLi4vdGltZUxvZ3MvdGltZWxvZ3MuY29tcG9uZW50J1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL3RpbWVMb2dzJywgY29tcG9uZW50OiBUaW1lTG9nc0NvbXBvbmVudCwgYXM6ICdUaW1lTG9ncycsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9hZGQvOmlkJywgY29tcG9uZW50OiBFZGl0VGltZUxvZ0NvbXBvbmVudCwgYXM6ICdBZGRUaW1lTG9nJ30sXHJcbl0pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItZml4ZWQtdG9wIGJnLWludmVyc2VcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBoaWRkZW4tc20tdXBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlByb2plY3QgbmFtZTwvYT5cclxuICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXhzLWxlZnRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ1RpbWVMb2dzJ11cIj5UaW1lIExvZ3MgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3t0aW1lTG9ncy5kYXRhLmxlbmd0aH19PC9zcGFuPjwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ0FkZFRpbWVMb2cnLCB7aWQ6J25ldyd9XVwiPkFkZCBUaW1lIExvZzwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cInB1bGwteHMtcmlnaHRcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjXCIgW3JvdXRlckxpbmtdPVwiWydUaW1lTG9ncyddXCI+VGltZSBMb2dzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnQWRkVGltZUxvZycsIHtpZDonbmV3J31dXCI+QWRkIFRpbWUgTG9nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wtc20tb2Zmc2V0LTMgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMiBtYWluIGFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtUaW1lTG9nc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICB0aW1lTG9nczogVGltZUxvZ3NEYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RpbWVMb2dzU2VydmljZTogVGltZUxvZ3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lTG9ncyA9IF90aW1lTG9nc1NlcnZpY2UudGltZUxvZ3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBhcmUgdXAgYW5kIHJ1bm5pbmchXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xyXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nXHJcbmltcG9ydCB7cHJvdmlkZX0gICAgZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtST1VURVJfQklORElOR1MsIFJPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBDT1JFX0RJUkVDVElWRVMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0pXHJcbl0pOyIsImltcG9ydCB7VGltZUxvZ30gZnJvbSAnLi9tb2RlbC90aW1lbG9nLm1vZGVsJztcclxuZXhwb3J0IHZhciBUSU1FX0xPR1M6IFRpbWVMb2dbXSA9IFtcclxuICAgIHtcImlkXCI6IDEsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIE5vZGUgSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDV9LFxyXG4gICAge1wiaWRcIjogMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNldHRpbmcgdXAgcHJvamVjdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgdHlwZXNjcmlwdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMTB9LFxyXG4gICAge1wiaWRcIjogNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgYW5ndWxhcjJcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJXcml0ZSBzaW1wbGUgc2VydmVyIGluIHR5cGVzY3JpcHRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDEwfSxcclxuICAgIHtcImlkXCI6IDYsIFwiZGVzY3JpcHRpb25cIjogXCJDb25maWd1cmluZyBHdWxwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiA3LCBcImRlc2NyaXB0aW9uXCI6IFwiUmVhZGluZyBhYm91dCBTeXN0ZW0gSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDgsIFwiZGVzY3JpcHRpb25cIjogXCJHdWxwIGxlc3MgYW5kIG1pbmlmeVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogOSwgXCJkZXNjcmlwdGlvblwiOiBcIlR5cGVzY3JpcHQgbWFqb3IgZGV0b3VyXCIsIFwidGltZUluTWludXRlc1wiOiA5MH0sXHJcbiAgICB7XCJpZFwiOiAxMCwgXCJkZXNjcmlwdGlvblwiOiBcIkFuZ3VsYXIgYXBwIHNldHVwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiAxMSwgXCJkZXNjcmlwdGlvblwiOiBcIkJhc2UgdXJsIHJvdXRpbmcgcHJvYmxlbSBpbiBub2RlXCIsIFwidGltZUluTWludXRlc1wiOiA0MH0sXHJcbiAgICB7XCJpZFwiOiAxMiwgXCJkZXNjcmlwdGlvblwiOiBcIkZpZ3VyaW5nIG91dCB0eXBlc2NyaXB0IGVycm9ycyB3aGljaCBkb2VzbuKAmXQgYWZmZWN0IHRoZSBhcHAgd29ya2luZ1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogNjB9LFxyXG4gICAge1wiaWRcIjogMTMsIFwiZGVzY3JpcHRpb25cIjogXCJMb2Rhc2ggaW1wb3J0XCIsIFwidGltZUluTWludXRlc1wiOiAxNX0sXHJcbiAgICB7XCJpZFwiOiAxNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGxpbmcgYm9vdHN0cmFwIChuZzItYm9vdHN0cmFwKVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogOTB9LFxyXG4gICAge1wiaWRcIjogMTUsIFwiZGVzY3JpcHRpb25cIjogXCJTZXR0aW5nIHVwIGJvb3RzdHJhcCBsYXlvdXRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDQwfSxcclxuICAgIHtcImlkXCI6IDE2LCBcImRlc2NyaXB0aW9uXCI6IFwiVHJpZWQgdG8gY29ubmVjdCBuZzItdGFibGUgcGx1Z2luXCIsIFwidGltZUluTWludXRlc1wiOiAzMH0sXHJcbiAgICB7XCJpZFwiOiAxNywgXCJkZXNjcmlwdGlvblwiOiBcIldyaXRpbmcgY29kZSBmb3IgYW5ndWxhciAyIGFwcFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjQwfVxyXG5dOyJdfQ==
