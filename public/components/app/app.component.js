System.register(['angular2/core', 'angular2/router', "../../services/timelogs.service", '../timeLogs/edit-timelog.component', '../timeLogs/timelogs.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, timelogs_service_1, edit_timelog_component_1, timelogs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (timelogs_service_1_1) {
                timelogs_service_1 = timelogs_service_1_1;
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
                    router_1.RouteConfig([
                        { path: '/timeLogs', component: timelogs_component_1.TimeLogsComponent, as: 'TimeLogs', useAsDefault: true },
                        { path: '/add/:id', component: edit_timelog_component_1.EditTimeLogComponent, as: 'AddTimeLog' },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a class=\"nav-item nav-link\" [routerLink]=\"['TimeLogs']\">Time Logs <span class=\"label label-success\">{{timeLogs.data.length}}</span></a>\n          <a class=\"nav-item nav-link\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a>\n        </nav>\n        <form class=\"pull-xs-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </nav>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main animated fadeInRight\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [timelogs_service_1.TimeLogsService]
                    }), 
                    __metadata('design:paramtypes', [timelogs_service_1.TimeLogsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrREE7Z0JBR0ksc0JBQW9CLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO2dCQUNBLENBQUM7Z0JBbkRMO29CQUFDLG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3JGLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBQztxQkFDeEUsQ0FBQztvQkFDRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUseWlEQWdDYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7Z0NBQUE7Z0JBWUYsbUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1RpbWVMb2dzU2VydmljZSwgVGltZUxvZ3NEYXRhfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZWxvZ3Muc2VydmljZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7RWRpdFRpbWVMb2dDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL2VkaXQtdGltZWxvZy5jb21wb25lbnQnXHJcbmltcG9ydCB7VGltZUxvZ3NDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL3RpbWVsb2dzLmNvbXBvbmVudCdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy90aW1lTG9ncycsIGNvbXBvbmVudDogVGltZUxvZ3NDb21wb25lbnQsIGFzOiAnVGltZUxvZ3MnLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAge3BhdGg6ICcvYWRkLzppZCcsIGNvbXBvbmVudDogRWRpdFRpbWVMb2dDb21wb25lbnQsIGFzOiAnQWRkVGltZUxvZyd9LFxyXG5dKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWZpeGVkLXRvcCBiZy1pbnZlcnNlXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgaGlkZGVuLXNtLXVwXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5Qcm9qZWN0IG5hbWU8L2E+XHJcbiAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2IG5hdmJhci1uYXYgcHVsbC14cy1sZWZ0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydUaW1lTG9ncyddXCI+VGltZSBMb2dzIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPnt7dGltZUxvZ3MuZGF0YS5sZW5ndGh9fTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydBZGRUaW1lTG9nJywge2lkOiduZXcnfV1cIj5BZGQgVGltZSBMb2c8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJwdWxsLXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1tZC0yIHNpZGViYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnVGltZUxvZ3MnXVwiPlRpbWUgTG9nczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBbcm91dGVyTGlua109XCJbJ0FkZFRpbWVMb2cnLCB7aWQ6J25ldyd9XVwiPkFkZCBUaW1lIExvZzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXNtLW9mZnNldC0zIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTIgbWFpbiBhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGltZUxvZ3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdGltZUxvZ3M6IFRpbWVMb2dzRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90aW1lTG9nc1NlcnZpY2U6IFRpbWVMb2dzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGltZUxvZ3MgPSBfdGltZUxvZ3NTZXJ2aWNlLnRpbWVMb2dzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHVwIGFuZCBydW5uaW5nIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICB9XHJcblxyXG59Il19
