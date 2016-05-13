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
                        templateUrl: "app/components/timeLogs/edit-timelog.component.html"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3RpbWVsb2cubW9kZWwudHMiLCJzZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50LnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiYm9vdHN0cmFwLnRzIiwibW9jay10aW1lLWxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsNkJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1FEO2dCQUNJLHlCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRXZCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO29CQUN6QyxhQUFRLEdBQWtCLEVBQUMsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDO2dCQUhKLENBQUM7O2dCQUtuQyxxQ0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQUEsaUJBUUM7b0JBUEcsaUdBQWlHO29CQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO3lCQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDckIsU0FBUyxDQUFDLFVBQUMsUUFBUTt3QkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxD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LENBQUMsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbkUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNqRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLG1DQUFtQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ2xGLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDakUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUN4RSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3JFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDeEUsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNuRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLGtDQUFrQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ2xGLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUscUVBQXFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDckgsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDL0QsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxzQ0FBc0MsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUN0RixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLDZCQUE2QixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQzdFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbkYsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFDO2FBQ3BGLENBQUEsQ0FBQyIsImZpbGUiOiJkaXN0L21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
