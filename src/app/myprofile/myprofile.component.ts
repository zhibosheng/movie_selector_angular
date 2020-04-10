import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'
import { User } from '../model/user.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  public user:User;
  constructor(private loggingService:LoggingService, private authService:AuthService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is my profile");
    this.authService.user.pipe(take(1)).subscribe(user=>{
      console.log(user);
      // alert(user.userName);
      this.user = new User(user.userId,user.userName,user.password,user.email,user.phone);
    });
  }

}
