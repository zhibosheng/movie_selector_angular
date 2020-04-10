import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  constructor(private loggingService:LoggingService, private authService:AuthService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign up");
  }

  signupRequest(signupForm:NgForm){
    // console.log(signupForm);
    // signupForm.reset();
    let userName = signupForm.value.userName;
    let password = signupForm.value.password;
    let email = signupForm.value.email;
    let phone = signupForm.value.phone;
    this.authService.signup(userName,password,email,phone).subscribe(resData => {
      console.log(resData);
      alert("signup success");
    },
    error => {
      alert(error);
    });
    signupForm.reset();
  }
}
