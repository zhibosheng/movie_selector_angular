import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatusChange("This is sign");
  }

}
