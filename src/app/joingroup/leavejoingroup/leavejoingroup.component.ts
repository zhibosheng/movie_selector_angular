import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { DatarequestService } from 'src/app/service/datarequest.service';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-leavejoingroup',
  templateUrl: './leavejoingroup.component.html',
  styleUrls: ['./leavejoingroup.component.css']
})
export class LeavejoingroupComponent implements OnInit {
  public user:User;
  
  constructor(private authService:AuthService, private datarequsest:DatarequestService) { }

  ngOnInit(): void {
  }

  leaveJoinGroup(addJoinGroupForm:NgForm){
    let groupName = addJoinGroupForm.value.groupName;
    alert(groupName)
    this.authService.user.pipe(take(1)).subscribe(user=>{
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });

    this.datarequsest.leaveJoinGroup(this.user.userName,groupName).subscribe(group=> {
      alert("leave group");
    });

  }
}
