import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatarequestService } from 'src/app/service/datarequest.service';
import { Group } from 'src/app/model/group.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.component.html',
  styleUrls: ['./groupdetail.component.css']
})
export class GroupdetailComponent implements OnInit {
  id: number;
  group:Group;
  event: Event;
  constructor(private route:ActivatedRoute,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = Number(params['id']);
      // this.datarequsest.getGroupById(this.id).subscribe(group=> {
      //   this.group = group;
      //   console.log(this.group);
      // });
      this.datarequsest.getGroupWithEvent(this.id).subscribe(group=> {
        alert(group.users);
        this.group = group;
        console.log(group);
      });
    });
  }

  sendInviteEmail(inviteEmailForm:NgForm){
    let email = inviteEmailForm.value.email;
    this.datarequsest.sendInviteGroupEmail(this.group.groupName,email).subscribe(res => {
      alert(res);
    });
  }

  newEvent(newEventForm:NgForm){
    let showTimeString = newEventForm.value.showTime;
    let showTime = new Date(showTimeString);
    alert(showTime);
    console.log(showTime);
    this.datarequsest.createEvent(this.group.groupName,showTime).subscribe(res =>{
      this.event = res;
    })
  }

}
