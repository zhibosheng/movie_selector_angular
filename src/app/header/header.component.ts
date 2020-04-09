import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  islogin:boolean = false;
  constructor(private loggingService: LoggingService, private authService:AuthService) { 
    this.islogin = authService.islogin;
    this.loggingService.logStatusChange(String(this.islogin));
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
  }

}
