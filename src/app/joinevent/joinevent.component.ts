import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatarequestService } from '../service/datarequest.service';

@Component({
  selector: 'app-joinevent',
  templateUrl: './joinevent.component.html',
  styleUrls: ['./joinevent.component.css']
})
export class JoineventComponent implements OnInit {
  id: number;
  event: Event;
  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = Number(params['id']);
      alert(this.id);
      // this.datarequsest.getEventById(this.id).subscribe(event=> {
      //   this.event = event;
      //   console.log(this.event);
      // });
      this.datarequsest.getEventWithVoting(this.id).subscribe(event=> {
        console.log(this.event);
        this.event= event;
      });
    });
  }

}
