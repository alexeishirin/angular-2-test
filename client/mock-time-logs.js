System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TIME_LOGS;
    return {
        setters:[],
        execute: function() {
            exports_1("TIME_LOGS", TIME_LOGS = [
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2stdGltZS1sb2dzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUNXLFNBQVM7Ozs7WUFBVCx1QkFBQSxTQUFTLEdBQWM7Z0JBQzlCLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBQztnQkFDbEUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNuRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ25FLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDakUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNsRixFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ2pFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDeEUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNyRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3hFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbkUsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxrQ0FBa0MsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNsRixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLHFFQUFxRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3JILEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQy9ELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsc0NBQXNDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDdEYsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSw2QkFBNkIsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUM3RSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLG1DQUFtQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ25GLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsZ0NBQWdDLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBQzthQUNwRixDQUFBLENBQUMiLCJmaWxlIjoibW9jay10aW1lLWxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpbWVMb2d9IGZyb20gJy4vbW9kZWwvdGltZWxvZy5tb2RlbCc7XHJcbmV4cG9ydCB2YXIgVElNRV9MT0dTOiBUaW1lTG9nW10gPSBbXHJcbiAgICB7XCJpZFwiOiAxLCBcImRlc2NyaXB0aW9uXCI6IFwiSW5zdGFsbGluZyBOb2RlIEpTXCIsIFwidGltZUluTWludXRlc1wiOiA1fSxcclxuICAgIHtcImlkXCI6IDIsIFwiZGVzY3JpcHRpb25cIjogXCJTZXR0aW5nIHVwIHByb2plY3RcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDMsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsIHR5cGVzY3JpcHRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDEwfSxcclxuICAgIHtcImlkXCI6IDQsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsIGFuZ3VsYXIyXCIsIFwidGltZUluTWludXRlc1wiOiAyMH0sXHJcbiAgICB7XCJpZFwiOiA1LCBcImRlc2NyaXB0aW9uXCI6IFwiV3JpdGUgc2ltcGxlIHNlcnZlciBpbiB0eXBlc2NyaXB0XCIsIFwidGltZUluTWludXRlc1wiOiAxMH0sXHJcbiAgICB7XCJpZFwiOiA2LCBcImRlc2NyaXB0aW9uXCI6IFwiQ29uZmlndXJpbmcgR3VscFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogNjB9LFxyXG4gICAge1wiaWRcIjogNywgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWRpbmcgYWJvdXQgU3lzdGVtIEpTXCIsIFwidGltZUluTWludXRlc1wiOiAyMH0sXHJcbiAgICB7XCJpZFwiOiA4LCBcImRlc2NyaXB0aW9uXCI6IFwiR3VscCBsZXNzIGFuZCBtaW5pZnlcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDksIFwiZGVzY3JpcHRpb25cIjogXCJUeXBlc2NyaXB0IG1ham9yIGRldG91clwiLCBcInRpbWVJbk1pbnV0ZXNcIjogOTB9LFxyXG4gICAge1wiaWRcIjogMTAsIFwiZGVzY3JpcHRpb25cIjogXCJBbmd1bGFyIGFwcCBzZXR1cFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogNjB9LFxyXG4gICAge1wiaWRcIjogMTEsIFwiZGVzY3JpcHRpb25cIjogXCJCYXNlIHVybCByb3V0aW5nIHByb2JsZW0gaW4gbm9kZVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogNDB9LFxyXG4gICAge1wiaWRcIjogMTIsIFwiZGVzY3JpcHRpb25cIjogXCJGaWd1cmluZyBvdXQgdHlwZXNjcmlwdCBlcnJvcnMgd2hpY2ggZG9lc27igJl0IGFmZmVjdCB0aGUgYXBwIHdvcmtpbmdcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDYwfSxcclxuICAgIHtcImlkXCI6IDEzLCBcImRlc2NyaXB0aW9uXCI6IFwiTG9kYXNoIGltcG9ydFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMTV9LFxyXG4gICAge1wiaWRcIjogMTQsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIGJvb3RzdHJhcCAobmcyLWJvb3RzdHJhcClcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDkwfSxcclxuICAgIHtcImlkXCI6IDE1LCBcImRlc2NyaXB0aW9uXCI6IFwiU2V0dGluZyB1cCBib290c3RyYXAgbGF5b3V0XCIsIFwidGltZUluTWludXRlc1wiOiA0MH0sXHJcbiAgICB7XCJpZFwiOiAxNiwgXCJkZXNjcmlwdGlvblwiOiBcIlRyaWVkIHRvIGNvbm5lY3QgbmcyLXRhYmxlIHBsdWdpblwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMzB9LFxyXG4gICAge1wiaWRcIjogMTcsIFwiZGVzY3JpcHRpb25cIjogXCJXcml0aW5nIGNvZGUgZm9yIGFuZ3VsYXIgMiBhcHBcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDI0MH1cclxuXTsiXX0=
