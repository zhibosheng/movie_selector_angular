import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[LoggingService]
})
export class SignupComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign up");
  }

}
