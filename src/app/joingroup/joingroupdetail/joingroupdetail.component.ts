import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/group.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DatarequestService } from 'src/app/service/datarequest.service';

@Component({
  selector: 'app-joingroupdetail',
  templateUrl: './joingroupdetail.component.html',
  styleUrls: ['./joingroupdetail.component.css']
})
export class JoingroupdetailComponent implements OnInit {
  id: number;
  group:Group;
  history: Event[];
  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = Number(params['id']);
    });
    this.datarequsest.getGroupWithEvent(this.id).subscribe(group=> {
      this.group = group;
      console.log(group);
      this.datarequsest.getHistory(this.group.groupName).subscribe(res=>{
        this.history = res;
        console.log(res);
      })
    });

  }

}
