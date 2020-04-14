import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user.model';
import { take,tap } from 'rxjs/operators'
import { Group } from 'src/app/model/group.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { DatarequestService } from 'src/app/service/datarequest.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  public user:User;
  public group:Group;
  constructor(private http: HttpClient,private authService:AuthService,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
  }

  createGroup(createGroupForm:NgForm){
    let groupName = createGroupForm.value.groupName;
    let groupDescription = createGroupForm.value.groupDescription;
    // alert(this.authService.Authorization);
    alert(groupName)
    this.authService.user.pipe(take(1)).subscribe(user=>{
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });

    this.datarequsest.createGroup(this.user.userName,groupName,groupDescription).subscribe(group=> {
      alert("create group");
    });
    this.datarequsest.group.pipe(take(1)).subscribe(group=>{
      // alert(user.userName);
      alert(group.groupId);
      this.group = new Group(group.groupId,group.groupName,groupDescription);
    
    });

  }

}
