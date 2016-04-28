System.register(['angular2/core', "../../model/TimeLog", "../../services/time-logs.service", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, TimeLog_1, time_logs_service_1, router_1;
    var AddTimeLogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TimeLog_1_1) {
                TimeLog_1 = TimeLog_1_1;
            },
            function (time_logs_service_1_1) {
                time_logs_service_1 = time_logs_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddTimeLogComponent = (function () {
                function AddTimeLogComponent(_routeParams, _router, _timeLogsService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._timeLogsService = _timeLogsService;
                    this.model = new TimeLog_1.TimeLog();
                    this.submitted = false;
                }
                AddTimeLogComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this._timeLogsService.editTimeLog(this.model);
                    this._router.navigate(['TimeLogs']);
                };
                AddTimeLogComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    if (id === 'new') {
                        return;
                    }
                    var timeLogById = this._timeLogsService.getTimeLog(+id);
                    if (timeLogById) {
                        this.model = timeLogById;
                    }
                };
                AddTimeLogComponent = __decorate([
                    core_1.Component({
                        selector: 'add-time-log',
                        template: "\n        <form (ngSubmit)=\"onSubmit()\" #timeLogForm=\"ngForm\">\n            <div class=\"form-group row\">\n                <label for=\"inputEmail3\" class=\"col-sm-2 form-control-label\">Description</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\" required>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"inputPassword3\" class=\"col-sm-2 form-control-label\">Time</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.timeInMinutes\" required >\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-secondary\">Add Time Log</button>\n                </div>\n            </div>\n        </form>\n    ",
                        providers: [time_logs_service_1.TimeLogsService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, time_logs_service_1.TimeLogsService])
                ], AddTimeLogComponent);
                return AddTimeLogComponent;
                var _a, _b;
            }());
            exports_1("AddTimeLogComponent", AddTimeLogComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RpbWVMb2dzL0FkZFRpbWVMb2dDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBVUksNkJBQW9CLFlBQXdCLEVBQVUsT0FBYyxFQUFVLGdCQUFnQztvQkFBMUYsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO29CQVQ5RyxVQUFLLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7b0JBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBU2xCLENBQUM7Z0JBUEQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFLRCxzQ0FBUSxHQUFSO29CQUNJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDZixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3hELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQzdCLENBQUM7Z0JBQ0wsQ0FBQztnQkFqREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHcvQkFvQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7dUNBQUE7Z0JBMEJGLDBCQUFDOztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQscURBd0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGltZUxvZ3MvQWRkVGltZUxvZ0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi8uLi9tb2RlbC9UaW1lTG9nXCI7XHJcbmltcG9ydCB7VGltZUxvZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZS1sb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXRpbWUtbG9nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAjdGltZUxvZ0Zvcm09XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzcz1cImNvbC1zbS0yIGZvcm0tY29udHJvbC1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwibW9kZWwuZGVzY3JpcHRpb25cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZDNcIiBjbGFzcz1cImNvbC1zbS0yIGZvcm0tY29udHJvbC1sYWJlbFwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJtb2RlbC50aW1lSW5NaW51dGVzXCIgcmVxdWlyZWQgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPkFkZCBUaW1lIExvZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtUaW1lTG9nc1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkVGltZUxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtb2RlbCA9IG5ldyBUaW1lTG9nKCk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmVkaXRUaW1lTG9nKHRoaXMubW9kZWwpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1RpbWVMb2dzJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOlJvdXRlUGFyYW1zLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF90aW1lTG9nc1NlcnZpY2U6VGltZUxvZ3NTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gJ25ldycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHZhciB0aW1lTG9nQnlJZCA9IHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9nKCtpZCk7XHJcbiAgICAgICAgaWYgKHRpbWVMb2dCeUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSB0aW1lTG9nQnlJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
