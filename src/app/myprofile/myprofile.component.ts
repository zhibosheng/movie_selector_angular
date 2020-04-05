import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers:[LoggingService]
})
export class MyprofileComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is my profile");
  }

}
