System.register(['angular2/core', 'angular2/router', '../timeLogs/AddTimeLogComponent', '../timeLogs/TimeLogsComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, AddTimeLogComponent_1, TimeLogsComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AddTimeLogComponent_1_1) {
                AddTimeLogComponent_1 = AddTimeLogComponent_1_1;
            },
            function (TimeLogsComponent_1_1) {
                TimeLogsComponent_1 = TimeLogsComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    console.log("We are up and running!");
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/timeLogs', component: TimeLogsComponent_1.TimeLogsComponent, as: 'TimeLogs', useAsDefault: true },
                        { path: '/add/:id', component: AddTimeLogComponent_1.AddTimeLogComponent, as: 'AddTimeLog' },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\">\n      <button type=\"button\" class=\"navbar-toggler hidden-sm-up\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      <div id=\"navbar\">\n        <nav class=\"nav navbar-nav pull-xs-left\">\n          <a class=\"nav-item nav-link\" [routerLink]=\"['TimeLogs']\">Tile Logs</a>\n          <a class=\"nav-item nav-link\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a>\n        </nav>\n        <form class=\"pull-xs-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </nav>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a href=\"#\" [routerLink]=\"['TimeLogs']\">Time Logs</a></li>\n            <li><a href=\"#\" [routerLink]=\"['AddTimeLog', {id:'new'}]\">Add Time Log</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnREE7Z0JBRUk7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELCtCQUFRLEdBQVI7Z0JBQ0EsQ0FBQztnQkFoREw7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDckYsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFDO3FCQUN2RSxDQUFDO29CQUNELGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxnOUNBZ0NiO3dCQUNHLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztnQ0FBQTtnQkFVRixtQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsdUNBU0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuXHJcblxyXG5pbXBvcnQge0FkZFRpbWVMb2dDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL0FkZFRpbWVMb2dDb21wb25lbnQnXHJcbmltcG9ydCB7VGltZUxvZ3NDb21wb25lbnR9IGZyb20gJy4uL3RpbWVMb2dzL1RpbWVMb2dzQ29tcG9uZW50J1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL3RpbWVMb2dzJywgY29tcG9uZW50OiBUaW1lTG9nc0NvbXBvbmVudCwgYXM6ICdUaW1lTG9ncycsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9hZGQvOmlkJywgY29tcG9uZW50OiBBZGRUaW1lTG9nQ29tcG9uZW50LCBhczogJ0FkZFRpbWVMb2cnfSxcclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1maXhlZC10b3AgYmctaW52ZXJzZVwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGhpZGRlbi1zbS11cFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+UHJvamVjdCBuYW1lPC9hPlxyXG4gICAgICA8ZGl2IGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IHB1bGwteHMtbGVmdFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnVGltZUxvZ3MnXVwiPlRpbGUgTG9nczwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ0FkZFRpbWVMb2cnLCB7aWQ6J25ldyd9XVwiPkFkZCBUaW1lIExvZzwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cInB1bGwteHMtcmlnaHRcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjXCIgW3JvdXRlckxpbmtdPVwiWydUaW1lTG9ncyddXCI+VGltZSBMb2dzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIFtyb3V0ZXJMaW5rXT1cIlsnQWRkVGltZUxvZycsIHtpZDonbmV3J31dXCI+QWRkIFRpbWUgTG9nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wtc20tb2Zmc2V0LTMgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMiBtYWluXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldlIGFyZSB1cCBhbmQgcnVubmluZyFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==
