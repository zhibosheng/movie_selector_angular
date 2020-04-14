import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { DatarequestService } from 'src/app/service/datarequest.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-joingroup-common',
  templateUrl: './joingroup-common.component.html',
  styleUrls: ['./joingroup-common.component.css']
})
export class JoingroupCommonComponent implements OnInit {
  public user:User;
  public groupSet:Object[];
  constructor(private router:Router,private http: HttpClient,private authService:AuthService,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user=>{
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });
    this.datarequsest.getJoinGroups(this.user.userName).subscribe(group=> {
      console.log(group);
      this.groupSet = group;
    });
  }

  joinGroup(): void{
    this.router.navigate(['/joingroup/addjoingroup']);
  }

  leaveGroup(): void{
    this.router.navigate(['/joingroup/leavejoingroup']);
  }

}
