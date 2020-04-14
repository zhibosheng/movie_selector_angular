import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../model/group.model';
import { User } from '../model/user.model';
import { Voting } from '../model/voting.model';


@Injectable({
    providedIn: 'root'
})
export class DatarequestService{
    group = new BehaviorSubject<Group>(null);

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

    createGroup(userName:string,groupName:string,groupDescription:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        searchParams = searchParams.append('groupName',groupName);
        searchParams = searchParams.append('groupDescription',groupDescription);
        alert(this.authService.Authorization);

        return this.http.post<Group>('http://localhost:8080/group/creation',{},{
          headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
          params: searchParams
        }).pipe(tap(resData =>{
          let group = new Group(resData.groupId,resData.groupName,resData.groupDescription);
          this.group.next(group);
        }));
    }

    getGroupById(groupId:number){
        return this.http.get<Group>('http://localhost:8080/group/'+groupId,{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getOwnGroups(userName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        return this.http.get<Group[]>('http://localhost:8080/user/ownGroup',{
          headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
          params: searchParams
        })
    }

    getJoinGroups(userName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        return this.http.get<Group[]>('http://localhost:8080/user/joinGroup',{
          headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
          params: searchParams
        })
    }

    sendInviteGroupEmail(groupName:string,email:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('groupName',groupName);
        searchParams = searchParams.append('email',email);
        alert(this.authService.Authorization);
        return this.http.post('http://localhost:8080/group/inviteGroupEmail',{},{
          headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
          params: searchParams
        });
    }

    addJoinGroup(userName:string,groupName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        searchParams = searchParams.append('groupName',groupName);
        return this.http.post<User>('http://localhost:8080/user/joinGroup',{},{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        }).pipe(tap(resData =>{
            let user = new User(resData.userId,resData.userName,resData.password,resData.email,resData.phone);
            this.authService.user.next(user);
        }));
    }

    leaveJoinGroup(userName:string,groupName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        searchParams = searchParams.append('groupName',groupName);
        return this.http.delete<User>('http://localhost:8080/user/joinGroup',{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        }).pipe(tap(resData =>{
            let user = new User(resData.userId,resData.userName,resData.password,resData.email,resData.phone);
            this.authService.user.next(user);
        }));
    }

    getGroupWithEvent(groupId:number){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('groupId',String(groupId));
        return this.http.get<Group>('http://localhost:8080/group/event',{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }

    createEvent(groupName:string,showTime){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('groupName',groupName);
        searchParams = searchParams.append('showTime',showTime);
        return this.http.post<Event>('http://localhost:8080/event/creation',{},{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }

    getEventById(eventId:number){
        return this.http.get<Event>('http://localhost:8080/event/'+String(eventId),{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getEventWithGroup(eventId:number){
        return this.http.get<Event>('http://localhost:8080/event/group/'+String(eventId),{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    getEventWithVoting(eventId:number){
        return this.http.get<Event>('http://localhost:8080/event/voting/'+String(eventId),{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    createVoting(startTime,endTime,eventId:number,groupName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('startTime',startTime);
        searchParams = searchParams.append('endTime',endTime);
        searchParams = searchParams.append('eventId',String(eventId));
        searchParams = searchParams.append('groupName',groupName);
        return this.http.post<Voting>('http://localhost:8080/voting/creation',{},{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }

    getVotingById(votingId:number){
        return this.http.get<Voting>('http://localhost:8080/voting/'+String(votingId),{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization})
        })
    }

    addMovie(eventId:number,movieList:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('eventId',String(eventId));
        searchParams = searchParams.append('movieList',movieList);
        return this.http.post<Event>('http://localhost:8080/event/addmovielist',{},{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }

    getHistory(groupName:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('groupName',groupName);
        return this.http.get<Event[]>('http://localhost:8080/group/history',{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }

    voteForMovie(userName:string,votingId:number,ttId:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('userName',userName);
        searchParams = searchParams.append('votingId',String(votingId));
        searchParams = searchParams.append('ttId',ttId);
        return this.http.post<Voting>('http://localhost:8080/voting/movie',{},{
            headers: new HttpHeaders({'Authorization':this.authService.Authorization}),
            params: searchParams
        })
    }
}