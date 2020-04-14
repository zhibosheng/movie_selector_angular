import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatarequestService } from '../service/datarequest.service';
import { NgForm } from '@angular/forms';
import { Voting } from '../model/voting.model';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  id: number;
  event: Event;
  voting:Voting;
  group:Group;

  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = Number(params['id']);
      alert(this.id);
      this.datarequsest.getEventById(this.id).subscribe(event=> {
        this.event = event;
        console.log(this.event);
      });
      this.datarequsest.getEventWithGroup(this.id).subscribe(event=> {
        console.log(this.event);
        this.event = event;
        alert(event.group);
      });
      this.datarequsest.getEventWithVoting(this.id).subscribe(event=> {
        console.log(this.event);
        this.event = event;
        this.votingId = event.voting.votingId;
      });
      // this.datarequsest.getVotingById()
    });
  }

  addMovie(addMovieForm:NgForm){
    let movieList = addMovieForm.value.movieList;
    this.datarequsest.addMovie(this.id,movieList).subscribe(res=>alert("add movie success"));
  }

  newVoting(newVotingForm:NgForm){
    let startTimeString = newVotingForm.value.startTime;
    let startTime = new Date(startTimeString);
    let endTimeString = newVotingForm.value.endTime;
    let endTime = new Date(endTimeString);
    alert(startTime);
    this.datarequsest.createVoting(startTime,endTime,this.id,"test1").subscribe(res =>{
      this.voting = res;
    })
  }
}
