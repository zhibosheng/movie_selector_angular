import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-joingroup',
  templateUrl: './joingroup.component.html',
  styleUrls: ['./joingroup.component.css'],
  providers:[LoggingService]
})
export class JoingroupComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is join group");
  }

}
