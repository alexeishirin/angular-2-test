System.register(['angular2/core', '../mock-time-logs', "lodash"], function(exports_1, context_1) {
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
    var core_1, mock_time_logs_1, _;
    var TimeLogsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_time_logs_1_1) {
                mock_time_logs_1 = mock_time_logs_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            TimeLogsService = (function () {
                function TimeLogsService() {
                    this.TIME_LOGS = mock_time_logs_1.TIME_LOGS;
                }
                TimeLogsService.prototype.getTimeLogs = function () {
                    return this.TIME_LOGS;
                };
                TimeLogsService.prototype.getTimeLog = function (id) {
                    return _.find(this.TIME_LOGS, { id: id });
                };
                TimeLogsService.prototype.editTimeLog = function (timeLog) {
                    if (timeLog.id) {
                        var timeLogToEdit = _.find(this.TIME_LOGS, { id: timeLog.id });
                        _.assign(timeLogToEdit, timeLog);
                    }
                    else {
                        var newId = _.maxBy(this.TIME_LOGS, 'id').id + 1;
                        _.assign(timeLog, { id: newId });
                        this.TIME_LOGS.push(timeLog);
                    }
                };
                TimeLogsService.prototype.deleteTimeLog = function (timeLog) {
                    _.remove(this.TIME_LOGS, timeLog);
                };
                TimeLogsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TimeLogsService);
                return TimeLogsService;
            }());
            exports_1("TimeLogsService", TimeLogsService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy90aW1lLWxvZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO29CQUNJLGNBQVMsR0FBRywwQkFBUyxDQUFDO2dCQXdCMUIsQ0FBQztnQkF2QkcscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVztvQkFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFpQjtvQkFDekIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1osSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO3dCQUM3RCxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDckMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDakQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx1Q0FBYSxHQUFiLFVBQWMsT0FBaUI7b0JBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkF4Qkw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBMEJiLHNCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCw2Q0F5QkMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvdGltZS1sb2dzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RJTUVfTE9HU30gZnJvbSAnLi4vbW9jay10aW1lLWxvZ3MnO1xyXG5pbXBvcnQge1RpbWVMb2d9IGZyb20gXCIuLi9tb2RlbC9UaW1lTG9nXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZUxvZ3NTZXJ2aWNlIHtcclxuICAgIFRJTUVfTE9HUyA9IFRJTUVfTE9HUztcclxuICAgIGdldFRpbWVMb2dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlRJTUVfTE9HUztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGltZUxvZyhpZCA6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5USU1FX0xPR1MsIHtpZDogaWR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWRpdFRpbWVMb2codGltZUxvZyA6IFRpbWVMb2cpIHtcclxuICAgICAgICBpZih0aW1lTG9nLmlkKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lTG9nVG9FZGl0ID0gXy5maW5kKHRoaXMuVElNRV9MT0dTLCB7aWQ6IHRpbWVMb2cuaWR9KTtcclxuICAgICAgICAgICAgXy5hc3NpZ24odGltZUxvZ1RvRWRpdCwgdGltZUxvZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5ld0lkID0gXy5tYXhCeSh0aGlzLlRJTUVfTE9HUywgJ2lkJykuaWQgKyAxO1xyXG4gICAgICAgICAgICBfLmFzc2lnbih0aW1lTG9nLCB7aWQ6IG5ld0lkfSk7XHJcbiAgICAgICAgICAgIHRoaXMuVElNRV9MT0dTLnB1c2godGltZUxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVUaW1lTG9nKHRpbWVMb2cgOiBUaW1lTG9nKSB7XHJcbiAgICAgICAgXy5yZW1vdmUodGhpcy5USU1FX0xPR1MsIHRpbWVMb2cpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
