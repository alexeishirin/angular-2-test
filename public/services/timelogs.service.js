System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', "lodash"], function(exports_1, context_1) {
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
            exports_1("TimeLogsService", TimeLogsService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQ0kseUJBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFFdkIsb0JBQWUsR0FBRyxjQUFjLENBQUM7b0JBQ3pDLGFBQVEsR0FBa0IsRUFBQyxJQUFJLEVBQUcsRUFBRSxFQUFDLENBQUM7Z0JBSEosQ0FBQzs7Z0JBS25DLHFDQUFXLEdBQVg7b0JBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsc0NBQVksR0FBWjtvQkFBQSxpQkFRQztvQkFQRyxpR0FBaUc7b0JBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7eUJBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3lCQUNyQixTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFXO29CQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFpQjtvQkFDekIsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQy9DLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7d0JBQ2pFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDckQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsdUNBQWEsR0FBYixVQUFjLE9BQWlCO29CQUMzQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVPLHFDQUFXLEdBQW5CLFVBQW9CLEdBQWE7b0JBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQTlDTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkErQ2Isc0JBQUM7WUFBRCxDQTlDQSxBQThDQyxJQUFBO1lBOUNELDZDQThDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3RpbWVsb2dzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtUaW1lTG9nfSBmcm9tIFwiLi4vbW9kZWwvdGltZWxvZy5tb2RlbFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVMb2dzRGF0YSB7XHJcbiAgICBkYXRhOiBUaW1lTG9nW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWVMb2dzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fTtcclxuXHJcbiAgICBwcml2YXRlIF90aW1lbG9nc0FQSVVybCA9ICdhcGkvdGltZWxvZ3MnO1xyXG4gICAgdGltZUxvZ3MgOiBUaW1lTG9nc0RhdGEgPSB7ZGF0YSA6IFtdfTtcclxuXHJcbiAgICBnZXRUaW1lTG9ncygpIHtcclxuICAgICAgICBpZihfLmlzRW1wdHkodGhpcy50aW1lTG9ncy5kYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRUaW1lTG9ncygpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUaW1lTG9ncygpIHtcclxuICAgICAgICAvLyB0aGlzLnRpbWVMb2dzLnRpbWVMb2dzID0gW3tcImlkXCI6IDEsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIE5vZGUgSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDV9XTtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuX3RpbWVsb2dzQVBJVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHRpbWVMb2dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVMb2dzLmRhdGEgPSB0aW1lTG9ncztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGltZUxvZ3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGltZUxvZyhpZCA6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy50aW1lTG9ncy5kYXRhLCB7aWQ6IGlkfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVkaXRUaW1lTG9nKHRpbWVMb2cgOiBUaW1lTG9nKSB7XHJcbiAgICAgICAgdGltZUxvZy50aW1lSW5NaW51dGVzID0gK3RpbWVMb2cudGltZUluTWludXRlcztcclxuICAgICAgICBpZih0aW1lTG9nLmlkKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lTG9nVG9FZGl0ID0gXy5maW5kKHRoaXMudGltZUxvZ3MuZGF0YSwge2lkOiB0aW1lTG9nLmlkfSk7XHJcbiAgICAgICAgICAgIF8uYXNzaWduKHRpbWVMb2dUb0VkaXQsIHRpbWVMb2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdJZCA9IF8ubWF4QnkodGhpcy50aW1lTG9ncy5kYXRhLCAnaWQnKS5pZCArIDE7XHJcbiAgICAgICAgICAgIF8uYXNzaWduKHRpbWVMb2csIHtpZDogbmV3SWR9KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lTG9ncy5kYXRhLnB1c2godGltZUxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVUaW1lTG9nKHRpbWVMb2cgOiBUaW1lTG9nKSB7XHJcbiAgICAgICAgXy5yZW1vdmUodGhpcy50aW1lTG9ncy5kYXRhLCB0aW1lTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCBbXTtcclxuICAgIH1cclxufSJdfQ==
