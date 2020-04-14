import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { DatarequestService } from 'src/app/service/datarequest.service';

@Component({
  selector: 'app-addjoingroup',
  templateUrl: './addjoingroup.component.html',
  styleUrls: ['./addjoingroup.component.css']
})
export class AddjoingroupComponent implements OnInit {

  public user:User;

  constructor(private authService:AuthService, private datarequsest:DatarequestService) { }

  ngOnInit(): void {
  }

  addJoinGroup(addJoinGroupForm:NgForm){
    let groupName = addJoinGroupForm.value.groupName;
    alert(groupName)
    this.authService.user.pipe(take(1)).subscribe(user=>{
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });

    this.datarequsest.addJoinGroup(this.user.userName,groupName).subscribe(group=> {
      alert("join new group");
    });

  }
}
