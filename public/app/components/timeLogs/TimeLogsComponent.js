System.register(['angular2/core', 'angular2/common', "../../services/time-logs.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, time_logs_service_1, router_1;
    var TimeLogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (time_logs_service_1_1) {
                time_logs_service_1 = time_logs_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TimeLogsComponent = (function () {
                function TimeLogsComponent(_router, _timeLogsService) {
                    this._router = _router;
                    this._timeLogsService = _timeLogsService;
                }
                TimeLogsComponent.prototype.ngOnInit = function () {
                    this.getTimeLogs();
                };
                TimeLogsComponent.prototype.getTimeLogs = function () {
                    this.timeLogs = this._timeLogsService.getTimeLogs();
                    this.total = _.reduce(this.timeLogs, function (summ, timeLog) {
                        return summ + timeLog.timeInMinutes;
                    }, 0);
                    console.log(this.total);
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
                    core_1.Component({
                        selector: 'time-logs',
                        template: "\n        <div class=\"row\">\n            <h1>Time Logs</h1>\n        </div>\n        <div class=\"row\">\n        <table class=\"table table-bordered table-striped\">\n            <tr>\n                <th>#</th> \n                <th>Description</th> \n                <th>Time in minutes</th> \n                <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"#timeLog of timeLogs\">\n                <th scope=\"row\">{{timeLog.id}}</th> \n                <td>{{timeLog.description}}</td> \n                <td>{{formatTime(timeLog.timeInMinutes)}} </td>\n                <td><span (click)=\"editTimeLog(timeLog)\" class=\"col-sm-2\">Edit</span><span (click)=\"deleteTimeLog(timeLog)\" class=\"col-sm-2\">Delete</span></td>\n            </tr>\n        </table>\n        </div>\n        <div class=\"row\">\n            <span class=\"col-sm-2 col-md-offset-6\">Total:</span>\n            <span class=\"col-sm-2\">{{formatTime(total)}}</span>\n        </div>\n    ",
                        directives: [common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [time_logs_service_1.TimeLogsService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, time_logs_service_1.TimeLogsService])
                ], TimeLogsComponent);
                return TimeLogsComponent;
                var _a;
            }());
            exports_1("TimeLogsComponent", TimeLogsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RpbWVMb2dzL1RpbWVMb2dzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUNBO2dCQUtJLDJCQUFvQixPQUFlLEVBQVUsZ0JBQWlDO29CQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Z0JBQUksQ0FBQztnQkFFbkYsb0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsdUNBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBUyxJQUFJLEVBQUUsT0FBTzt3QkFDdEQsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsc0NBQVUsR0FBVixVQUFXLGFBQWE7b0JBQ3BCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1AsVUFBVSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7d0JBQzlCLFVBQVUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ3pDLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ25CLFVBQVUsSUFBSSxhQUFhLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDbEQsQ0FBQztvQkFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHlDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFPO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLENBQUMsWUFBWSxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQzlELENBQUM7Z0JBdkVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxzOUJBd0JUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdCQUFPLEVBQUUsYUFBSSxFQUFFLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQzt3QkFDN0QsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7cUNBQUE7Z0JBMkNGLHdCQUFDOztZQUFELENBekNBLEFBeUNDLElBQUE7WUF6Q0QsaURBeUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGltZUxvZ3MvVGltZUxvZ3NDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBOZ0NsYXNzLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi8uLi9tb2RlbC9UaW1lTG9nXCI7XHJcbmltcG9ydCB7VGltZUxvZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGltZS1sb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aW1lLWxvZ3MnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxoMT5UaW1lIExvZ3M8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD4jPC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5UaW1lIGluIG1pbnV0ZXM8L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN0aW1lTG9nIG9mIHRpbWVMb2dzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57e3RpbWVMb2cuaWR9fTwvdGg+IFxyXG4gICAgICAgICAgICAgICAgPHRkPnt7dGltZUxvZy5kZXNjcmlwdGlvbn19PC90ZD4gXHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tmb3JtYXRUaW1lKHRpbWVMb2cudGltZUluTWludXRlcyl9fSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxzcGFuIChjbGljayk9XCJlZGl0VGltZUxvZyh0aW1lTG9nKVwiIGNsYXNzPVwiY29sLXNtLTJcIj5FZGl0PC9zcGFuPjxzcGFuIChjbGljayk9XCJkZWxldGVUaW1lTG9nKHRpbWVMb2cpXCIgY2xhc3M9XCJjb2wtc20tMlwiPkRlbGV0ZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1zbS0yIGNvbC1tZC1vZmZzZXQtNlwiPlRvdGFsOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2wtc20tMlwiPnt7Zm9ybWF0VGltZSh0b3RhbCl9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmdDbGFzcywgTmdJZiwgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGltZUxvZ3NTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVMb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpbWVMb2dzOiBUaW1lTG9nW107XHJcbiAgICB0b3RhbDpudW1iZXI7XHJcbiAgICB0b3RhbExhYmVsOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfdGltZUxvZ3NTZXJ2aWNlOiBUaW1lTG9nc1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLmdldFRpbWVMb2dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUxvZ3MoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lTG9ncyA9IHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSBfLnJlZHVjZSh0aGlzLnRpbWVMb2dzLCBmdW5jdGlvbihzdW1tLCB0aW1lTG9nKXtcclxuICAgICAgICAgICAgIHJldHVybiBzdW1tICsgdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWUodGltZUluTWludXRlcykge1xyXG4gICAgICAgIHZhciB0aW1lU3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVJbk1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgaWYoaG91cnMpIHtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyArIFwiIGhvdXJcIjtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyA+IDEgPyBcInMgXCIgOiBcIiBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRpbWVJbk1pbnV0ZXMgJSA2MCl7XHJcbiAgICAgICAgICAgIHRpbWVTdHJpbmcgKz0gdGltZUluTWludXRlcyAlIDYwICsgXCIgbWludXRlc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGltZUxvZyh0aW1lTG9nKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmRlbGV0ZVRpbWVMb2codGltZUxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRpbWVMb2codGltZUxvZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWydBZGRUaW1lTG9nJywge2lkOiB0aW1lTG9nLmlkfV0gKTtcclxuICAgIH1cclxufSJdfQ==
