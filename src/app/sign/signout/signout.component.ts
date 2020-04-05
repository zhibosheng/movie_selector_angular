import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign out");
  }
  
}
