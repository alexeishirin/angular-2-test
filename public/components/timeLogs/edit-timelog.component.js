System.register(['angular2/core', "../../model/timelog.model", "../../services/timelogs.service", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, timelog_model_1, timelogs_service_1, router_1;
    var EditTimeLogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Component({
                        selector: 'add-time-log',
                        templateUrl: "app/components/timeLogs/edit-timelog.component.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, timelogs_service_1.TimeLogsService])
                ], EditTimeLogComponent);
                return EditTimeLogComponent;
            }());
            exports_1("EditTimeLogComponent", EditTimeLogComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZUxvZ3MvZWRpdC10aW1lbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQVVJLDhCQUFvQixZQUF3QixFQUFVLE9BQWMsRUFBVSxnQkFBZ0M7b0JBQTFGLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQjtvQkFUOUcsVUFBSyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO29CQUN0QixjQUFTLEdBQUcsS0FBSyxDQUFDO2dCQVNsQixDQUFDO2dCQVBELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBS0QsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO29CQUM3QixDQUFDO2dCQUNMLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSxxREFBcUQ7cUJBQ3JFLENBQUM7O3dDQUFBO2dCQTBCRiwyQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsdURBd0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90aW1lTG9ncy9lZGl0LXRpbWVsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VGltZUxvZ30gZnJvbSBcIi4uLy4uL21vZGVsL3RpbWVsb2cubW9kZWxcIjtcclxuaW1wb3J0IHtUaW1lTG9nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90aW1lbG9ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZGQtdGltZS1sb2cnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvdGltZUxvZ3MvZWRpdC10aW1lbG9nLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0VGltZUxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtb2RlbCA9IG5ldyBUaW1lTG9nKCk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmVkaXRUaW1lTG9nKHRoaXMubW9kZWwpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1RpbWVMb2dzJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOlJvdXRlUGFyYW1zLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF90aW1lTG9nc1NlcnZpY2U6VGltZUxvZ3NTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gJ25ldycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHZhciB0aW1lTG9nQnlJZCA9IHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9nKCtpZCk7XHJcbiAgICAgICAgaWYgKHRpbWVMb2dCeUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSB0aW1lTG9nQnlJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
