System.register(['angular2/core', 'angular2/common', "../../services/timelogs.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, timelogs_service_1, router_1;
    var TimeLogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (timelogs_service_1_1) {
                timelogs_service_1 = timelogs_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                    core_1.Component({
                        selector: 'time-logs',
                        template: "\n        <div class=\"row\">\n            <h1>Time Logs</h1>\n        </div>\n        <div class=\"row\">\n        <table class=\"table table-bordered table-striped\">\n            <tr>\n                <th>#</th> \n                <th>Description</th> \n                <th>Time in minutes</th> \n                <th>Actions</th>\n            </tr>\n            <tr *ngFor=\"#timeLog of timeLogs.data\">\n                <th scope=\"row\">{{timeLog.id}}</th> \n                <td>{{timeLog.description}}</td> \n                <td>{{formatTime(timeLog.timeInMinutes)}} </td>\n                <td><span (click)=\"editTimeLog(timeLog)\" class=\"col-sm-2\">Edit</span><span (click)=\"deleteTimeLog(timeLog)\" class=\"col-sm-2\">Delete</span></td>\n            </tr>\n        </table>\n        </div>\n        <div class=\"row\">\n            <span class=\"col-sm-2 col-md-offset-6\">Total:</span>\n            <span class=\"col-sm-2\">{{showTotalTime()}}</span>\n        </div>\n    ",
                        directives: [common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, timelogs_service_1.TimeLogsService])
                ], TimeLogsComponent);
                return TimeLogsComponent;
            }());
            exports_1("TimeLogsComponent", TimeLogsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZUxvZ3MvdGltZWxvZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUdJLDJCQUFvQixPQUFlLEVBQVUsZ0JBQWlDO29CQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQzFFLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxDQUFDO2dCQUVELG9DQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHVDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNoQyxnRUFBZ0U7b0JBQ3BFLHVEQUF1RDtvQkFDdkQsZ0VBQWdFO29CQUNoRSw0Q0FBNEM7b0JBQzVDLFNBQVM7b0JBQ1QsMkJBQTJCO2dCQUMvQixDQUFDO2dCQUVELHlDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFTLElBQUksRUFBRSxPQUFPO3dCQUNqRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsc0NBQVUsR0FBVixVQUFXLGFBQWE7b0JBQ3BCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1AsVUFBVSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7d0JBQzlCLFVBQVUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ3pDLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ25CLFVBQVUsSUFBSSxhQUFhLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDbEQsQ0FBQztvQkFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHlDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFPO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLENBQUMsWUFBWSxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQzlELENBQUM7Z0JBOUVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSx5OUJBd0JUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdCQUFPLEVBQUUsYUFBSSxFQUFFLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQztxQkFDaEUsQ0FBQzs7cUNBQUE7Z0JBbURGLHdCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCxpREFpREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RpbWVMb2dzL3RpbWVsb2dzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE5nQ2xhc3MsIE5nSWZ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7VGltZUxvZ30gZnJvbSBcIi4uLy4uL21vZGVsL3RpbWVsb2cubW9kZWxcIjtcclxuaW1wb3J0IHtUaW1lTG9nc1NlcnZpY2UsIFRpbWVMb2dzRGF0YX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aW1lLWxvZ3MnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxoMT5UaW1lIExvZ3M8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD4jPC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5UaW1lIGluIG1pbnV0ZXM8L3RoPiBcclxuICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN0aW1lTG9nIG9mIHRpbWVMb2dzLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt7dGltZUxvZy5pZH19PC90aD4gXHJcbiAgICAgICAgICAgICAgICA8dGQ+e3t0aW1lTG9nLmRlc2NyaXB0aW9ufX08L3RkPiBcclxuICAgICAgICAgICAgICAgIDx0ZD57e2Zvcm1hdFRpbWUodGltZUxvZy50aW1lSW5NaW51dGVzKX19IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gKGNsaWNrKT1cImVkaXRUaW1lTG9nKHRpbWVMb2cpXCIgY2xhc3M9XCJjb2wtc20tMlwiPkVkaXQ8L3NwYW4+PHNwYW4gKGNsaWNrKT1cImRlbGV0ZVRpbWVMb2codGltZUxvZylcIiBjbGFzcz1cImNvbC1zbS0yXCI+RGVsZXRlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLXNtLTIgY29sLW1kLW9mZnNldC02XCI+VG90YWw6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1zbS0yXCI+e3tzaG93VG90YWxUaW1lKCl9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmdDbGFzcywgTmdJZiwgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUxvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGltZUxvZ3M6IFRpbWVMb2dzRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfdGltZUxvZ3NTZXJ2aWNlOiBUaW1lTG9nc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpbWVMb2dzID0gX3RpbWVMb2dzU2VydmljZS50aW1lTG9ncztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUaW1lTG9ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVMb2dzKCkge1xyXG4gICAgICAgIHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgICAgICAvLyAuc3Vic2NyaWJlKGZ1bmN0aW9uKGhlcm9lcykge3JldHVybiB0aGlzLnRpbWVMb2dzID0gaGVyb2VzfSk7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lTG9ncyA9IHRoaXMuX3RpbWVMb2dzU2VydmljZS5nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgIC8vIHRoaXMudG90YWwgPSBfLnJlZHVjZSh0aGlzLnRpbWVMb2dzLCBmdW5jdGlvbihzdW1tLCB0aW1lTG9nKXtcclxuICAgICAgICAvLyAgICAgIHJldHVybiBzdW1tICsgdGltZUxvZy50aW1lSW5NaW51dGVzO1xyXG4gICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG90YWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93VG90YWxUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpbWUoXy5yZWR1Y2UodGhpcy50aW1lTG9ncy5kYXRhLCBmdW5jdGlvbihzdW1tLCB0aW1lTG9nKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gc3VtbSArIHRpbWVMb2cudGltZUluTWludXRlcztcclxuICAgICAgICAgICAgfSwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWUodGltZUluTWludXRlcykge1xyXG4gICAgICAgIHZhciB0aW1lU3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVJbk1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgaWYoaG91cnMpIHtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyArIFwiIGhvdXJcIjtcclxuICAgICAgICAgICAgdGltZVN0cmluZyArPSBob3VycyA+IDEgPyBcInMgXCIgOiBcIiBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRpbWVJbk1pbnV0ZXMgJSA2MCl7XHJcbiAgICAgICAgICAgIHRpbWVTdHJpbmcgKz0gdGltZUluTWludXRlcyAlIDYwICsgXCIgbWludXRlc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGltZUxvZyh0aW1lTG9nKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZUxvZ3NTZXJ2aWNlLmRlbGV0ZVRpbWVMb2codGltZUxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFRpbWVMb2codGltZUxvZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWydBZGRUaW1lTG9nJywge2lkOiB0aW1lTG9nLmlkfV0gKTtcclxuICAgIH1cclxufSJdfQ==
