import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-owngroup',
  templateUrl: './owngroup.component.html',
  styleUrls: ['./owngroup.component.css'],
  providers:[LoggingService]
})
export class OwngroupComponent implements OnInit {

  constructor(private loggingService : LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is own group");
  }

}
