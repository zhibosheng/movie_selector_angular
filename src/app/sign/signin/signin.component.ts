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

  onLogin(){
    this.authService.login();
  }

  signinRequest(signinForm:NgForm){
    console.log(signinForm);
    console.log(signinForm.value.userName);
    signinForm.reset();
  }
}
