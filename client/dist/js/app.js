var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("server/models/timelog.model", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeLog;
    return {
        setters:[],
        execute: function() {
            //adding the id as it is added by mongoose
            TimeLog = (function () {
                function TimeLog() {
                }
                return TimeLog;
            }());
            exports_1("TimeLog", TimeLog);
        }
    }
});
System.register("client/app/services/timelogs.service", ['angular2/core', 'angular2/http', 'rxjs/Rx', "lodash"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, http_1, _, http_2;
    var TimeLogsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
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
                    return _.find(this.timeLogs.data, { _id: id });
                };
                TimeLogsService.prototype.editTimeLog = function (timeLog) {
                    var _this = this;
                    timeLog.timeInMinutes = +timeLog.timeInMinutes;
                    if (timeLog._id) {
                        var timeLogToEdit = _.find(this.timeLogs.data, { _id: timeLog._id });
                        _.assign(timeLogToEdit, timeLog);
                    }
                    else {
                        this.timeLogs.data.push(timeLog);
                    }
                    console.log(timeLog);
                    var body = JSON.stringify(timeLog);
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http
                        .post(this._timelogsAPIUrl, body, { headers: headers })
                        .map(this.extractData)
                        .subscribe(function (timeLogs) {
                        console.log(_this.timeLogs);
                    });
                    ;
                };
                TimeLogsService.prototype.deleteTimeLog = function (timeLog) {
                    var _this = this;
                    console.log(timeLog);
                    _.remove(this.timeLogs.data, timeLog);
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http
                        .delete(this._timelogsAPIUrl + '/delete/' + timeLog._id, { headers: headers })
                        .map(this.extractData)
                        .subscribe(function (timeLogs) {
                        console.log(_this.timeLogs);
                    });
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
System.register("client/app/components/timeLogs/edit-timelog.component.html", [], function(exports_3, context_3) {
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
System.register("client/app/components/timeLogs/edit-timelog.component", ['angular2/core', "server/models/timelog.model", "client/app/services/timelogs.service", 'angular2/router', "ng2-material/all", 'angular2/common', "client/app/components/timeLogs/edit-timelog.component.html"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, timelog_model_1, timelogs_service_1, router_1, all_1, common_1, edit_timelog_component_html_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
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
                    var timeLogById = this._timeLogsService.getTimeLog(id);
                    if (timeLogById) {
                        this.model = timeLogById;
                    }
                };
                EditTimeLogComponent = __decorate([
                    core_2.Component({
                        selector: 'add-time-log',
                        template: edit_timelog_component_html_1.htmlTemplate,
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, timelogs_service_1.TimeLogsService])
                ], EditTimeLogComponent);
                return EditTimeLogComponent;
            }());
            exports_4("EditTimeLogComponent", EditTimeLogComponent);
        }
    }
});
System.register("client/app/components/timeLogs/timelogs.component.html", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_5("htmlTemplate", htmlTemplate = "\n        <div class=\"row\">\n            <h1>Time Logs</h1>\n        </div>\n        <div class=\"row\">\n        <table class=\"table table-bordered table-striped\">\n            <tr>\n                <th>#</th> \n                <th>Description</th> \n                <th>Time in minutes</th> \n                <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"#timeLog of timeLogs.data\">\n                <th scope=\"row\">{{timeLog._id}}</th> \n                <td>{{timeLog.description}}</td> \n                <td>{{formatTime(timeLog.timeInMinutes)}} </td>\n                <td><span (click)=\"editTimeLog(timeLog)\" class=\"col-sm-2\">Edit</span><span (click)=\"deleteTimeLog(timeLog)\" class=\"col-sm-2\">Delete</span></td>\n            </tr>\n        </table>\n        </div>\n        <div class=\"row\">\n            <span class=\"col-sm-2 col-md-offset-6\">Total:</span>\n            <span class=\"col-sm-2\">{{showTotalTime()}}</span>\n        </div>\n    ");
        }
    }
});
System.register("client/app/components/timeLogs/timelogs.component", ['angular2/core', 'angular2/common', "client/app/services/timelogs.service", "angular2/router", "client/app/components/timeLogs/timelogs.component.html"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_3, common_2, timelogs_service_2, router_2, timelogs_component_html_1;
    var TimeLogsComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
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
                    this._router.navigate(['AddTimeLog', { id: timeLog._id }]);
                };
                TimeLogsComponent = __decorate([
                    core_3.Component({
                        selector: 'time-logs',
                        template: timelogs_component_html_1.htmlTemplate,
                        directives: [common_2.NgClass, common_2.NgIf, common_2.CORE_DIRECTIVES, common_2.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, timelogs_service_2.TimeLogsService])
                ], TimeLogsComponent);
                return TimeLogsComponent;
            }());
            exports_6("TimeLogsComponent", TimeLogsComponent);
        }
    }
});
System.register("client/app/components/app/app.component.html", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_7("htmlTemplate", htmlTemplate = "\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n<div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Angular 2</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <form class=\"navbar-form navbar-right search\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </form>\n        </div>\n      </div>\n    </nav>\n<div class=\"container-fluid top-menu-margin\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n          <div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n    <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle [disabled]=\"disabled\">\n      Button dropdown <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n    </ul>\n  </div>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n");
        }
    }
});
System.register("client/app/components/app/app.component", ['angular2/core', 'angular2/router', "client/app/services/timelogs.service", 'ng2-bootstrap/ng2-bootstrap', "client/app/components/timeLogs/edit-timelog.component", "client/app/components/timeLogs/timelogs.component", "client/app/components/app/app.component.html"], function(exports_8, context_8) {
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
System.register("client/app/components/app/index", ["client/app/components/app/app.component"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_9(exports);
    }
    return {
        setters:[
            function (app_component_1_1) {
                exportStar_1(app_component_1_1);
            }],
        execute: function() {
        }
    }
});
/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
System.register("client/app/bootstrap", ['angular2/platform/browser', 'angular2/platform/common', 'angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', "client/app/components/app/index"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var browser_1, common_3, core_5, common_4, router_4, http_3, index_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (common_4_1) {
                common_4 = common_4_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(index_1.AppComponent, [
                router_4.ROUTER_PROVIDERS,
                common_4.CORE_DIRECTIVES,
                http_3.HTTP_PROVIDERS,
                core_5.provide(common_3.LocationStrategy, { useClass: common_3.PathLocationStrategy })
            ]);
        }
    }
});
System.register("client/app/mock-time-logs", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var TIME_LOGS;
    return {
        setters:[],
        execute: function() {
            exports_11("TIME_LOGS", TIME_LOGS = [
                { "id": "1", "description": "Installing Node JS", "timeInMinutes": 5 },
                { "id": "2", "description": "Setting up project", "timeInMinutes": 20 },
                { "id": "3", "description": "Install typescript", "timeInMinutes": 10 },
                { "id": "4", "description": "Install angular2", "timeInMinutes": 20 },
                { "id": "5", "description": "Write simple server in typescript", "timeInMinutes": 10 },
                { "id": "6", "description": "Configuring Gulp", "timeInMinutes": 60 },
                { "id": "7", "description": "Reading about System JS", "timeInMinutes": 20 },
                { "id": "8", "description": "Gulp less and minify", "timeInMinutes": 20 },
                { "id": "9", "description": "Typescript major detour", "timeInMinutes": 90 },
                { "id": "10", "description": "Angular app setup", "timeInMinutes": 60 },
                { "id": "11", "description": "Base url routing problem in node", "timeInMinutes": 40 },
                { "id": "12", "description": "Figuring out typescript errors which doesn’t affect the app working", "timeInMinutes": 60 },
                { "id": "13", "description": "Lodash import", "timeInMinutes": 15 },
                { "id": "14", "description": "Installing bootstrap (ng2-bootstrap)", "timeInMinutes": 90 },
                { "id": "15", "description": "Setting up bootstrap layout", "timeInMinutes": 40 },
                { "id": "16", "description": "Tried to connect ng2-table plugin", "timeInMinutes": 30 },
                { "id": "17", "description": "Writing code for angular 2 app", "timeInMinutes": 240 }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9tb2RlbHMvdGltZWxvZy5tb2RlbC50cyIsImNsaWVudC9hcHAvc2VydmljZXMvdGltZWxvZ3Muc2VydmljZS50cyIsImNsaWVudC9hcHAvY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50Lmh0bWwudHMiLCJjbGllbnQvYXBwL2NvbXBvbmVudHMvdGltZUxvZ3MvZWRpdC10aW1lbG9nLmNvbXBvbmVudC50cyIsImNsaWVudC9hcHAvY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQuaHRtbC50cyIsImNsaWVudC9hcHAvY29tcG9uZW50cy90aW1lTG9ncy90aW1lbG9ncy5jb21wb25lbnQudHMiLCJjbGllbnQvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbC50cyIsImNsaWVudC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImNsaWVudC9hcHAvYm9vdHN0cmFwLnRzIiwiY2xpZW50L2FwcC9tb2NrLXRpbWUtbG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBS0EsMENBQTBDO1lBQzFDO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsNkJBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNHRDtnQkFDSSx5QkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUV2QixvQkFBZSxHQUFHLGNBQWMsQ0FBQztvQkFDekMsYUFBUSxHQUFrQixFQUFDLElBQUksRUFBRyxFQUFFLEVBQUMsQ0FBQztnQkFISixDQUFDOztnQkFLbkMscUNBQVcsR0FBWDtvQkFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsWUFBWSxFQUFF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YSxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQzFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDdkUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUMxRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3JFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsa0NBQWtDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDcEYsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxxRUFBcUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUN2SCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNqRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLHNDQUFzQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3hGLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDL0UsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNyRixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLGdDQUFnQyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUM7YUFDdEYsQ0FBQSxDQUFDIiwiZmlsZSI6ImRpc3QvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
