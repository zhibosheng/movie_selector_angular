import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoggingService } from '../service/logging.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  islogin:boolean = false;
  private userSub: Subscription;

  constructor(private loggingService: LoggingService, private authService:AuthService) { 
    this.islogin = this.authService.islogin;
    this.loggingService.logStatusChange(String(this.islogin));
  }

  ngOnInit(): void {
    this.islogin = this.authService.islogin;
    this.userSub = this.authService.user.subscribe();
    console.log(this.userSub);
    this.authService.user.pipe(take(1)).subscribe(user=>{
      console.log(user)
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
