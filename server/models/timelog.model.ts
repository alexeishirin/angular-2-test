export interface ITimeLog {
    description: string;
    timeInMinutes: number;
}

//adding the id as it is added by mongoose
export class TimeLog implements ITimeLog{
    _id: string;
    description: string;
    timeInMinutes: number;
}