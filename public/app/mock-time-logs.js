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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2NrLXRpbWUtbG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFDVyxTQUFTOzs7O1lBQVQsdUJBQUEsU0FBUyxHQUFjO2dCQUM5QixFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUM7Z0JBQ2xFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbkUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNuRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ2pFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbEYsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNqRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3hFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDckUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUN4RSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ25FLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsa0NBQWtDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDbEYsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxxRUFBcUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNySCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUMvRCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLHNDQUFzQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUM7Z0JBQ3RGLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQztnQkFDN0UsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxtQ0FBbUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFDO2dCQUNuRixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLGdDQUFnQyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUM7YUFDcEYsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC9tb2NrLXRpbWUtbG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGltZUxvZ30gZnJvbSAnLi9tb2RlbC9UaW1lTG9nJztcclxuZXhwb3J0IHZhciBUSU1FX0xPR1M6IFRpbWVMb2dbXSA9IFtcclxuICAgIHtcImlkXCI6IDEsIFwiZGVzY3JpcHRpb25cIjogXCJJbnN0YWxsaW5nIE5vZGUgSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDV9LFxyXG4gICAge1wiaWRcIjogMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNldHRpbmcgdXAgcHJvamVjdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogMywgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgdHlwZXNjcmlwdFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMTB9LFxyXG4gICAge1wiaWRcIjogNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGwgYW5ndWxhcjJcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDUsIFwiZGVzY3JpcHRpb25cIjogXCJXcml0ZSBzaW1wbGUgc2VydmVyIGluIHR5cGVzY3JpcHRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDEwfSxcclxuICAgIHtcImlkXCI6IDYsIFwiZGVzY3JpcHRpb25cIjogXCJDb25maWd1cmluZyBHdWxwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiA3LCBcImRlc2NyaXB0aW9uXCI6IFwiUmVhZGluZyBhYm91dCBTeXN0ZW0gSlNcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDIwfSxcclxuICAgIHtcImlkXCI6IDgsIFwiZGVzY3JpcHRpb25cIjogXCJHdWxwIGxlc3MgYW5kIG1pbmlmeVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjB9LFxyXG4gICAge1wiaWRcIjogOSwgXCJkZXNjcmlwdGlvblwiOiBcIlR5cGVzY3JpcHQgbWFqb3IgZGV0b3VyXCIsIFwidGltZUluTWludXRlc1wiOiA5MH0sXHJcbiAgICB7XCJpZFwiOiAxMCwgXCJkZXNjcmlwdGlvblwiOiBcIkFuZ3VsYXIgYXBwIHNldHVwXCIsIFwidGltZUluTWludXRlc1wiOiA2MH0sXHJcbiAgICB7XCJpZFwiOiAxMSwgXCJkZXNjcmlwdGlvblwiOiBcIkJhc2UgdXJsIHJvdXRpbmcgcHJvYmxlbSBpbiBub2RlXCIsIFwidGltZUluTWludXRlc1wiOiA0MH0sXHJcbiAgICB7XCJpZFwiOiAxMiwgXCJkZXNjcmlwdGlvblwiOiBcIkZpZ3VyaW5nIG91dCB0eXBlc2NyaXB0IGVycm9ycyB3aGljaCBkb2VzbuKAmXQgYWZmZWN0IHRoZSBhcHAgd29ya2luZ1wiLCBcInRpbWVJbk1pbnV0ZXNcIjogNjB9LFxyXG4gICAge1wiaWRcIjogMTMsIFwiZGVzY3JpcHRpb25cIjogXCJMb2Rhc2ggaW1wb3J0XCIsIFwidGltZUluTWludXRlc1wiOiAxNX0sXHJcbiAgICB7XCJpZFwiOiAxNCwgXCJkZXNjcmlwdGlvblwiOiBcIkluc3RhbGxpbmcgYm9vdHN0cmFwIChuZzItYm9vdHN0cmFwKVwiLCBcInRpbWVJbk1pbnV0ZXNcIjogOTB9LFxyXG4gICAge1wiaWRcIjogMTUsIFwiZGVzY3JpcHRpb25cIjogXCJTZXR0aW5nIHVwIGJvb3RzdHJhcCBsYXlvdXRcIiwgXCJ0aW1lSW5NaW51dGVzXCI6IDQwfSxcclxuICAgIHtcImlkXCI6IDE2LCBcImRlc2NyaXB0aW9uXCI6IFwiVHJpZWQgdG8gY29ubmVjdCBuZzItdGFibGUgcGx1Z2luXCIsIFwidGltZUluTWludXRlc1wiOiAzMH0sXHJcbiAgICB7XCJpZFwiOiAxNywgXCJkZXNjcmlwdGlvblwiOiBcIldyaXRpbmcgY29kZSBmb3IgYW5ndWxhciAyIGFwcFwiLCBcInRpbWVJbk1pbnV0ZXNcIjogMjQwfVxyXG5dOyJdfQ==
