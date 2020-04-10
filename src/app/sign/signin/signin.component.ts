import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  constructor(private loggingService:LoggingService,private authService:AuthService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign in");
  }

  // onLogin(){
  //   this.authService.login();
  // }

  signinRequest(signinForm:NgForm){
    // console.log(signinForm);
    // console.log(signinForm.value.userName);
    let userName = signinForm.value.userName;
    let password = signinForm.value.password;
    console.log(password);
    this.authService.signin(userName,password).subscribe(resData => {
      this.authService.islogin = true;
      this.authService.Authorization = resData["Authorization"];
      console.log(this.authService.Authorization);
      alert("signin success");
      this.authService.getUserByName(userName).subscribe(userData => {
        // alert(userData.userName);
      });
    },
    error => {
      console.log(error);
      alert(error);
    });
    this.authService.user.subscribe(user => {
      console.log(user);
    })
    signinForm.reset();
  }
}
