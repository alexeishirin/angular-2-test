export const htmlTemplate = `
        <div class="row">
            <h1>Time Logs</h1>
        </div>
        <div class="row">
        <table class="table table-bordered table-striped">
            <tr>
                <th>#</th> 
                <th>Description</th> 
                <th>Time in minutes</th> 
                <th>Actions</th>
            </tr>
            <tr *ngFor="#timeLog of timeLogs.data">
                <th scope="row">{{timeLog._id}}</th> 
                <td>{{timeLog.description}}</td> 
                <td>{{formatTime(timeLog.timeInMinutes)}} </td>
                <td><span (click)="editTimeLog(timeLog)" class="col-sm-2">Edit</span><span (click)="deleteTimeLog(timeLog)" class="col-sm-2">Delete</span></td>
            </tr>
        </table>
        </div>
        <div class="row">
            <span class="col-sm-2 col-md-offset-6">Total:</span>
            <span class="col-sm-2">{{showTotalTime()}}</span>
        </div>
    `;