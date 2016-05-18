export const htmlTemplate = `
<md-progress-circle mode="indeterminate"></md-progress-circle>
<md-card><form (ngSubmit)="onSubmit()" #timeLogForm="ngForm">
    <div class="form-group row">
        <label class="col-sm-2 form-control-label">Description</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" [(ngModel)]="model.description" required>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-2 form-control-label">Time</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" [(ngModel)]="model.timeInMinutes" required >
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-secondary">Add Time Log</button>
        </div>
    </div>
</form></md-card>
`;