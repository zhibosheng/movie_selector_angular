import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogin:boolean = false;


  constructor(private http: HttpClient) { }


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

  signup(userName:string, password:string, email:string, phone:string){
    return this.http.post('http://localhost:8080/auth/registration',
    {
      userName:userName,
      password:password,
      email:email,
      phone:phone
    })
  }
}
