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
System.register("components/timeLogs/edit-timelog.component.html", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_3("htmlTemplate", htmlTemplate = "\n<md-progress-linear mode=\"indeterminate\"></md-progress-linear>\n<md-card><form (ngSubmit)=\"onSubmit()\" #timeLogForm=\"ngForm\">\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Description</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\" required>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-2 form-control-label\">Time</label>\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.timeInMinutes\" required >\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Add Time Log</button>\n        </div>\n    </div>\n</form></md-card>\n");
        }
    }
});
System.register("components/timeLogs/edit-timelog.component", ['angular2/core', "model/timelog.model", "services/timelogs.service", 'angular2/router', "ng2-material/all", "components/timeLogs/edit-timelog.component.html"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, timelog_model_1, timelogs_service_1, router_1, all_1, edit_timelog_component_html_1;
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
            },
            function (edit_timelog_component_html_1_1) {
                edit_timelog_component_html_1 = edit_timelog_component_html_1_1;
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
                        template: edit_timelog_component_html_1.htmlTemplate,
                        directives: [all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, timelogs_service_1.TimeLogsService])
                ], EditTimeLogComponent);
                return EditTimeLogComponent;
            }());
            exports_4("EditTimeLogComponent", EditTimeLogComponent);
        }
    }
});
System.register("components/timeLogs/timelogs.component.html", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_5("htmlTemplate", htmlTemplate = "\n        <div class=\"row\">\n            <h1>Time Logs</h1>\n        </div>\n        <div class=\"row\">\n        <table class=\"table table-bordered table-striped\">\n            <tr>\n                <th>#</th> \n                <th>Description</th> \n                <th>Time in minutes</th> \n                <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"#timeLog of timeLogs.data\">\n                <th scope=\"row\">{{timeLog.id}}</th> \n                <td>{{timeLog.description}}</td> \n                <td>{{formatTime(timeLog.timeInMinutes)}} </td>\n                <td><span (click)=\"editTimeLog(timeLog)\" class=\"col-sm-2\">Edit</span><span (click)=\"deleteTimeLog(timeLog)\" class=\"col-sm-2\">Delete</span></td>\n            </tr>\n        </table>\n        </div>\n        <div class=\"row\">\n            <span class=\"col-sm-2 col-md-offset-6\">Total:</span>\n            <span class=\"col-sm-2\">{{showTotalTime()}}</span>\n        </div>\n    ");
        }
    }
});
System.register("components/timeLogs/timelogs.component", ['angular2/core', 'angular2/common', "services/timelogs.service", "angular2/router", "components/timeLogs/timelogs.component.html"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3, common_1, timelogs_service_2, router_2, timelogs_component_html_1;
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
            },
            function (timelogs_component_html_1_1) {
                timelogs_component_html_1 = timelogs_component_html_1_1;
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
                        template: timelogs_component_html_1.htmlTemplate,
                        directives: [common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, timelogs_service_2.TimeLogsService])
                ], TimeLogsComponent);
                return TimeLogsComponent;
            }());
            exports_6("TimeLogsComponent", TimeLogsComponent);
        }
    }
});
System.register("components/app/app.component.html", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_7("htmlTemplate", htmlTemplate = "\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n<div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Angular 2</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <form class=\"navbar-form navbar-right\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </form>\n        </div>\n      </div>\n    </nav>\n<div class=\"container-fluid top-menu-margin\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle [disabled]=\"disabled\">\n      Button dropdown <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n    </ul>\n  </div>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n");
        }
    }
});
System.register("components/app/app.component", ['angular2/core', 'angular2/router', "services/timelogs.service", 'ng2-bootstrap/ng2-bootstrap', "components/timeLogs/edit-timelog.component", "components/timeLogs/timelogs.component", "components/app/app.component.html"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_4, router_3, timelogs_service_3, ng2_bootstrap_1, edit_timelog_component_1, timelogs_component_1, app_component_html_1;
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
            },
            function (app_component_html_1_1) {
                app_component_html_1 = app_component_html_1_1;
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
                        template: app_component_html_1.htmlTemplate,
                        directives: [router_3.ROUTER_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        providers: [timelogs_service_3.TimeLogsService]
                    }), 
                    __metadata('design:paramtypes', [timelogs_service_3.TimeLogsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_8("AppComponent", AppComponent);
        }
    }
});
/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
System.register("bootstrap", ['angular2/platform/browser', 'angular2/platform/common', 'angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', "components/app/app.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
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
System.register("mock-time-logs", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var TIME_LOGS;
    return {
        setters:[],
        execute: function() {
            exports_10("TIME_LOGS", TIME_LOGS = [
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3RpbWVsb2cubW9kZWwudHMiLCJzZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50Lmh0bWwudHMiLCJjb21wb25lbnRzL3RpbWVMb2dzL2VkaXQtdGltZWxvZy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL3RpbWVMb2dzL3RpbWVsb2dzLmNvbXBvbmVudC5odG1sLnRzIiwiY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQudHMiLCJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwudHMiLCJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiYm9vdHN0cmFwLnRzIiwibW9jay10aW1lLWxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsNkJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1FEO2dCQUNJLHlCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRXZCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO29CQUN6QyxhQUFRLEdBQWtCLEVBQUMsSUFBSSxFQUFHLEVBQUUsRUFBQyxDQUFDO2dCQUhKLENBQUM7O2dCQUtuQyxxQ0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHNDQUFZLEdBQVo7b0JBQUEsaUJBUUM7b0JBUEcsaUdBQWlHO29CQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFB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cnQgY2xhc3MgVGltZUxvZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHRpbWVJbk1pbnV0ZXM6IG51bWJlcjtcclxufSIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi9tb2RlbC90aW1lbG9nLm1vZGVsXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZUxvZ3NEYXRhIHtcclxuICAgIGRhdGE6IFRpbWVMb2dbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZUxvZ3NTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9O1xyXG5cclxuICAgIHByaXZhdGUgX3RpbWVsb2dzQVBJVXJsID0gJ2FwaS90aW1lbG9ncyc7XHJcbiAgICB0aW1lTG9ncyA6IFRpbWVMb2dzRGF0YSA9IHtkYXRhIDogW119O1xyXG5cclxuICAgIGdldFRpbWVMb2dzKCkge1xyXG4gICAgICAgIGlmKF8uaXNFbXB0eSh0aGlzLnRpbWVMb2dzLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldFRpbWVMb2dzKCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2dldFRpbWVMb2dzKCkge1xyXG4gICAgICAgIC8vIHRoaXMudGltZUxvZ3MudGltZUxvZ3MgPSBbe1wiaWRcIjogMSwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGxpbmcgTm9kZSBKU1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogNX1dO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5fdGltZWxvZ3NBUElVcmwpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgodGltZUxvZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUxvZ3MuZGF0YSA9IHRpbWVMb2dzO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50aW1lTG9ncyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRUaW1lTG9nKGlkIDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLnRpbWVMb2dzLmRhdGEsIHtpZDogaWR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWRpdFRpbWVMb2codGltZUxvZyA6IFRpbWVMb2cpIHtcclxuICAgICAgICB0aW1lTG9nLnRpbWVJbk1pbnV0ZXMgPSArdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgIGlmKHRpbWVMb2cuaWQpIHtcclxuICAgICAgICAgICAgdmFyIHRpbWVMb2dUb0VkaXQgPSBfLmZpbmQodGhpcy50aW1lTG9ncy5kYXRhLCB7aWQ6IHRpbWVMb2cuaWR9KTtcclxuICAgICAgICAgICAgXy5hc3NpZ24odGltZUxvZ1RvRWRpdCwgdGltZUxvZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5ld0lkID0gXy5tYXhCeSh0aGlzLnRpbWVMb2dzLmRhdGEsICdpZCcpLmlkICsgMTtcclxuICAgICAgICAgICAgXy5hc3NpZ24odGltZUxvZywge2lkOiBuZXdJZH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMb2dzLmRhdGEucHVzaCh0aW1lTG9nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZVRpbWVMb2codGltZUxvZyA6IFRpbWVMb2cpIHtcclxuICAgICAgICBfLnJlbW92ZSh0aGlzLnRpbWVMb2dzLmRhdGEsIHRpbWVMb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IFtdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcclxuPG1kLXByb2dyZXNzLWxpbmVhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWQtcHJvZ3Jlc3MtbGluZWFyPlxyXG48bWQtY2FyZD48Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICN0aW1lTG9nRm9ybT1cIm5nRm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTIgZm9ybS1jb250cm9sLWxhYmVsXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0yIGZvcm0tY29udHJvbC1sYWJlbFwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLnRpbWVJbk1pbnV0ZXNcIiByZXF1aXJlZCA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5BZGQgVGltZSBMb2c8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Zvcm0+PC9tZC1jYXJkPlxyXG5gOyIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi8uLi9tb2RlbC90aW1lbG9nLm1vZGVsXCI7XHJcbmltcG9ydCB7VGltZUxvZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZWxvZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9hbGxcIjtcclxuXHJcbmltcG9ydCB7aHRtbFRlbXBsYXRlfSBmcm9tICcuL2VkaXQtdGltZWxvZy5jb21wb25lbnQuaHRtbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXRpbWUtbG9nJyxcclxuICAgIHRlbXBsYXRlOiBodG1sVGVtcGxhdGUsXHJcbiAgICBkaXJlY3RpdmVzOltNQVRFUklBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRUaW1lTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1vZGVsID0gbmV3IFRpbWVMb2coKTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl90aW1lTG9nc1NlcnZpY2UuZWRpdFRpbWVMb2codGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVGltZUxvZ3MnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVQYXJhbXM6Um91dGVQYXJhbXMsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3RpbWVMb2dzU2VydmljZTpUaW1lTG9nc1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgICAgaWYgKGlkID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdmFyIHRpbWVMb2dCeUlkID0gdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2coK2lkKTtcclxuICAgICAgICBpZiAodGltZUxvZ0J5SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRpbWVMb2dCeUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBodG1sVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDE+VGltZSBMb2dzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+IzwvdGg+IFxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGg+VGltZSBpbiBtaW51dGVzPC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjdGltZUxvZyBvZiB0aW1lTG9ncy5kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57e3RpbWVMb2cuaWR9fTwvdGg+IFxyXG4gICAgICAgICAgICAgICAgPHRkPnt7dGltZUxvZy5kZXNjcmlwdGlvbn19PC90ZD4gXHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tmb3JtYXRUaW1lKHRpbWVMb2cudGltZUluTWludXRlcyl9fSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxzcGFuIChjbGljayk9XCJlZGl0VGltZUxvZyh0aW1lTG9nKVwiIGNsYXNzPVwiY29sLXNtLTJcIj5FZGl0PC9zcGFuPjxzcGFuIChjbGljayk9XCJkZWxldGVUaW1lTG9nKHRpbWVMb2cpXCIgY2xhc3M9XCJjb2wtc20tMlwiPkRlbGV0ZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1zbS0yIGNvbC1tZC1vZmZzZXQtNlwiPlRvdGFsOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2wtc20tMlwiPnt7c2hvd1RvdGFsVGltZSgpfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgOyIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE5nQ2xhc3MsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7VGltZUxvZ30gZnJvbSBcIi4uLy4uL21vZGVsL3RpbWVsb2cubW9kZWxcIjtcclxuaW1wb3J0IHtUaW1lTG9nc1NlcnZpY2UsIFRpbWVMb2dzRGF0YX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7aHRtbFRlbXBsYXRlfSBmcm9tICcuL3RpbWVsb2dzLmNvbXBvbmVudC5odG1sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aW1lLWxvZ3MnLFxyXG4gICAgdGVtcGxhdGU6IGh0bWxUZW1wbGF0ZSxcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0NsYXNzLCBOZ0lmLCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aW1lTG9nczogVGltZUxvZ3NEYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF90aW1lTG9nc1NlcnZpY2U6IFRpbWVMb2dzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGltZUxvZ3MgPSBfdGltZUxvZ3NTZXJ2aWNlLnRpbWVMb2dzO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLmdldFRpbWVMb2dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUxvZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2dzKCk7XHJcbiAgICAgICAgICAgIC8vIC5zdWJzY3JpYmUoZnVuY3Rpb24oaGVyb2VzKSB7cmV0dXJuIHRoaXMudGltZUxvZ3MgPSBoZXJvZXN9KTtcclxuICAgICAgICAvLyB0aGlzLnRpbWVMb2dzID0gdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmdldFRpbWVMb2dzKCk7XHJcbiAgICAgICAgLy8gdGhpcy50b3RhbCA9IF8ucmVkdWNlKHRoaXMudGltZUxvZ3MsIGZ1bmN0aW9uKHN1bW0sIHRpbWVMb2cpe1xyXG4gICAgICAgIC8vICAgICAgcmV0dXJuIHN1bW0gKyB0aW1lTG9nLnRpbWVJbk1pbnV0ZXM7XHJcbiAgICAgICAgLy8gfSwgMCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b3RhbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dUb3RhbFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VGltZShfLnJlZHVjZSh0aGlzLnRpbWVMb2dzLmRhdGEsIGZ1bmN0aW9uKHN1bW0sIHRpbWVMb2cpe1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBzdW1tICsgdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgICAgICB9LCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VGltZSh0aW1lSW5NaW51dGVzKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IodGltZUluTWludXRlcyAvIDYwKTtcclxuICAgICAgICBpZihob3Vycykge1xyXG4gICAgICAgICAgICB0aW1lU3RyaW5nICs9IGhvdXJzICsgXCIgaG91clwiO1xyXG4gICAgICAgICAgICB0aW1lU3RyaW5nICs9IGhvdXJzID4gMSA/IFwicyBcIiA6IFwiIFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGltZUluTWludXRlcyAlIDYwKXtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSB0aW1lSW5NaW51dGVzICUgNjAgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUaW1lTG9nKHRpbWVMb2cpIHtcclxuICAgICAgICB0aGlzLl90aW1lTG9nc1NlcnZpY2UuZGVsZXRlVGltZUxvZyh0aW1lTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0VGltZUxvZyh0aW1lTG9nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbJ0FkZFRpbWVMb2cnLCB7aWQ6IHRpbWVMb2cuaWR9XSApO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcclxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+QW5ndWxhciAyPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnVGltZUxvZ3MnXVwiPlRpbWUgTG9nczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBbcm91dGVyTGlua109XCJbJ0FkZFRpbWVMb2cnLCB7aWQ6J25ldyd9XVwiPkFkZCBUaW1lIExvZzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCB0b3AtbWVudS1tYXJnaW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjXCIgW3JvdXRlckxpbmtdPVwiWydUaW1lTG9ncyddXCI+VGltZSBMb2dzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnQWRkVGltZUxvZycsIHtpZDonbmV3J31dXCI+QWRkIFRpbWUgTG9nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRyb3Bkb3duIFsoaXNPcGVuKV09XCJzdGF0dXMuaXNvcGVuXCI+XHJcbiAgICA8YnV0dG9uIGlkPVwic2luZ2xlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRyb3Bkb3duVG9nZ2xlIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICBCdXR0b24gZHJvcGRvd24gPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwic2luZ2xlLWJ1dHRvblwiPlxyXG4gICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCI+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+PC9saT5cclxuICAgICAgPGxpIHJvbGU9XCJtZW51aXRlbVwiPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cclxuICAgICAgPGxpIHJvbGU9XCJtZW51aXRlbVwiPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyIGRyb3Bkb3duLWRpdmlkZXJcIj48L2xpPlxyXG4gICAgICA8bGkgcm9sZT1cIm1lbnVpdGVtXCI+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXNtLW9mZnNldC0zIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTIgbWFpblwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1RpbWVMb2dzU2VydmljZSwgVGltZUxvZ3NEYXRhfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZWxvZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0RST1BET1dOX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0VkaXRUaW1lTG9nQ29tcG9uZW50fSBmcm9tICcuLi90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaW1lTG9nc0NvbXBvbmVudH0gZnJvbSAnLi4vdGltZUxvZ3MvdGltZWxvZ3MuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7aHRtbFRlbXBsYXRlfSBmcm9tICcuL2FwcC5jb21wb25lbnQuaHRtbCc7XHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL3RpbWVMb2dzJywgY29tcG9uZW50OiBUaW1lTG9nc0NvbXBvbmVudCwgYXM6ICdUaW1lTG9ncycsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9hZGQvOmlkJywgY29tcG9uZW50OiBFZGl0VGltZUxvZ0NvbXBvbmVudCwgYXM6ICdBZGRUaW1lTG9nJ30sXHJcbl0pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGh0bWxUZW1wbGF0ZSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRFJPUERPV05fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtUaW1lTG9nc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGltZUxvZ3M6VGltZUxvZ3NEYXRhO1xyXG4gICAgcHVibGljIHN0YXR1czp7aXNvcGVuOmJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gICAgZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RpbWVMb2dzU2VydmljZTpUaW1lTG9nc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpbWVMb2dzID0gX3RpbWVMb2dzU2VydmljZS50aW1lTG9ncztcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldlIGFyZSB1cCBhbmQgcnVubmluZyFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xyXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nXHJcbmltcG9ydCB7cHJvdmlkZX0gICAgZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtST1VURVJfQklORElOR1MsIFJPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBDT1JFX0RJUkVDVElWRVMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0pXHJcbl0pOyIsImltcG9ydCB7VGltZUxvZ30gZnJvbSAnLi9tb2RlbC90aW1lbG9nLm1vZGVsJztcclxuZXhwb3J0IHZhciBUSU1FX0xPR1M6IFRpbWVMb2dbXSA9IFtcclxuICAgIHtcImlkXCI6IDEsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIE5vZGUgSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDV9LFxyXG4gICAge1wiaWRcIjogMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNldHRpbmcgdXAgcHJvamVjdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgdHlwZXNjcmlwdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMTB9LFxyXG4gICAge1wiaWRcIjogNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgYW5ndWxhcjJcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJXcml0ZSBzaW1wbGUgc2VydmVyIGluIHR5cGVzY3JpcHRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDEwfSxcclxuICAgIHtcImlkXCI6IDYsIFwiZGVzY3JpcHRpb25cIjogXCJDb25maWd1cmluZyBHdWxwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiA3LCBcImRlc2NyaXB0aW9uXCI6IFwiUmVhZGluZyBhYm91dCBTeXN0ZW0gSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDgsIFwiZGVzY3JpcHRpb25cIjogXCJHdWxwIGxlc3MgYW5kIG1pbmlmeVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogOSwgXCJkZXNjcmlwdGlvblwiOiBcIlR5cGVzY3JpcHQgbWFqb3IgZGV0b3VyXCIsIFwidGltZUluTWludXRlc1wiOiA5MH0sXHJcbiAgICB7XCJpZFwiOiAxMCwgXCJkZXNjcmlwdGlvblwiOiBcIkFuZ3VsYXIgYXBwIHNldHVwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiAxMSwgXCJkZXNjcmlwdGlvblwiOiBcIkJhc2UgdXJsIHJvdXRpbmcgcHJvYmxlbSBpbiBub2RlXCIsIFwidGltZUluTWludXRlc1wiOiA0MH0sXHJcbiAgICB7XCJpZFwiOiAxMiwgXCJkZXNjcmlwdGlvblwiOiBcIkZpZ3VyaW5nIG91dCB0eXBlc2NyaXB0IGVycm9ycyB3aGljaCBkb2VzbuKAmXQgYWZmZWN0IHRoZSBhcHAgd29ya2luZ1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogNjB9LFxyXG4gICAge1wiaWRcIjogMTMsIFwiZGVzY3JpcHRpb25cIjogXCJMb2Rhc2ggaW1wb3J0XCIsIFwidGltZUluTWludXRlc1wiOiAxNX0sXHJcbiAgICB7XCJpZFwiOiAxNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGxpbmcgYm9vdHN0cmFwIChuZzItYm9vdHN0cmFwKVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogOTB9LFxyXG4gICAge1wiaWRcIjogMTUsIFwiZGVzY3JpcHRpb25cIjogXCJTZXR0aW5nIHVwIGJvb3RzdHJhcCBsYXlvdXRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDQwfSxcclxuICAgIHtcImlkXCI6IDE2LCBcImRlc2NyaXB0aW9uXCI6IFwiVHJpZWQgdG8gY29ubmVjdCBuZzItdGFibGUgcGx1Z2luXCIsIFwidGltZUluTWludXRlc1wiOiAzMH0sXHJcbiAgICB7XCJpZFwiOiAxNywgXCJkZXNjcmlwdGlvblwiOiBcIldyaXRpbmcgY29kZSBmb3IgYW5ndWxhciAyIGFwcFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjQwfVxyXG5dOyJdfQ==
