import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogin:boolean = false;


  constructor() { }

  isAuth(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.islogin);
        }, 200);
      }
    );
    return promise;
  }

  login(){
    this.islogin = true;
  }

  logout(){
    this.islogin = false;
  }
}
