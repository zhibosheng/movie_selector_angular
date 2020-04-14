import { Group } from './group.model';
import { Voting } from './voting.model';

export class Event{
    eventId:number;
    votingId?:number;
    selectedMovies?:string[];
    createTime:Date;
    showTime:Date;
    movieDecision?:string;
    group?:Group;
    voting?:Voting;

    constructor(evenId: number, createTime: Date,showTime: Date){
        this.eventId = evenId;
        this.createTime = createTime;
        this.showTime = showTime;
    }
}