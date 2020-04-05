import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService, private router:Router) {}
  
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): 
              Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuth().then(
      (authenticated: boolean) => {
        if (authenticated){
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      }
    );
  }
}
