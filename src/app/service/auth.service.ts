import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import{ tap } from'rxjs/operators';
import { Group } from '../model/group.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogin:boolean = false;
  Authorization:string = "";
  user = new BehaviorSubject<User>(null);


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

  signin(userName:string, password:string){
    return this.http.post('http://localhost:8080/auth',{
      userName:userName,
      password:password
    })
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
    });
  }

  getUserByName(userName:string){
    // alert(this.Authorization);
    return this.http.get<User>('http://localhost:8080/user/name/'+userName,{
      headers: new HttpHeaders({'Authorization':this.Authorization})
    }).pipe(tap(resData =>{
      let user = new User(resData.userId,resData.userName,resData.password,resData.email,resData.phone);
      this.user.next(user);
    }));
  }


}
