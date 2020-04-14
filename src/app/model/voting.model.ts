import { Event } from './event.model';
export class Voting{
    public votingId:number;
    public startTime:Date;
    public endTime:Date;
    public votingResult:string;
    public votingEvent?:Event;
    
    constructor(votingId:number,startTime:Date,endTime:Date){
        this.votingId = votingId;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}