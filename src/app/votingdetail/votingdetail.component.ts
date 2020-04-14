import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatarequestService } from '../service/datarequest.service';
import { Voting } from '../model/voting.model';

@Component({
  selector: 'app-votingdetail',
  templateUrl: './votingdetail.component.html',
  styleUrls: ['./votingdetail.component.css']
})
export class VotingdetailComponent implements OnInit {
  id: number;
  voting: Voting;

  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      alert(params['id']);
      this.id = Number(params['id']);
      alert(this.id);
      this.datarequsest.getVotingById(this.id).subscribe(voting=> {
        this.voting = voting;
        console.log(this.voting);
      });
      // this.datarequsest.getVotingById()
    });
  }

}
