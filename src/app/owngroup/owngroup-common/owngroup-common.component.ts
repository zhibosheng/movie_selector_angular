import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { DatarequestService } from 'src/app/service/datarequest.service';
import { User } from 'src/app/model/user.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-owngroup-common',
  templateUrl: './owngroup-common.component.html',
  styleUrls: ['./owngroup-common.component.css']
})
export class OwngroupCommonComponent implements OnInit {
  public user:User;
  public groupSet:Object[];
  constructor(private router:Router,private http: HttpClient,private authService:AuthService,private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user=>{
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });
    this.datarequsest.getOwnGroups(this.user.userName).subscribe(group=> {
      console.log(group);
      this.groupSet = group;
    });
  }

  newGroup(): void{
    this.router.navigate(['/owngroup/creategroup']);
  }

}
