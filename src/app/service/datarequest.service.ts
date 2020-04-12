import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Url } from 'url';


@Injectable({
    providedIn: 'root'
})
export class DatarequestService{

    constructor(private http: HttpClient,private authService: AuthService) { }

    getDefaultMovies(){
        return this.http.get('http://localhost:8080/movie/default',{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getMoreLikeThis(ttId:string){
        return this.http.get<string[]>('http://localhost:8080/movie/moreLikeThis/'+ttId,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getOverviewDetails(ttId:string){
        return this.http.get('http://localhost:8080/movie/detail/'+ttId,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getTrailerUrl(ttId){
        return this.http.get('http://localhost:8080/movie/trailerUrl/'+ttId,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getUserReviewsList(ttId){
        return this.http.get<string[]>('http://localhost:8080/movie/review/'+ttId,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    findMovie(movieName){
        return this.http.get('http://localhost:8080/movie/find/'+movieName,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }
}