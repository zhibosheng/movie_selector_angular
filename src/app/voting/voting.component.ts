import { Component, OnInit } from '@angular/core';
import { DatarequestService } from '../service/datarequest.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { take } from 'rxjs/operators';
import { Voting } from '../model/voting.model';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  id:number;
  public user:User;
  voting:Voting;

  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService,private authService:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      alert(params['id']);
      this.id = Number(params['id']);
      alert(this.id);
      this.datarequsest.getVotingById(this.id).subscribe(voting=> {
        this.voting = voting;
        console.log(this.voting);
      });
      this.authService.user.pipe(take(1)).subscribe(user=>{
        console.log(user);
        // alert(user.userName);
        this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
      });
      // this.datarequsest.getVotingById()
    });
  }

  voteForMovie(voteForMovieForm:NgForm){
    let ttId = voteForMovieForm.value.ttId;
    this.datarequsest.voteForMovie(this.user.userName,this.id,ttId).subscribe(res =>{
      this.voting = res;
      alert("voting success");
    })
  }
}
