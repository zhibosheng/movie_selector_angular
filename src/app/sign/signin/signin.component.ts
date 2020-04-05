import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[LoggingService]
})
export class SigninComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign in");
  }

}
