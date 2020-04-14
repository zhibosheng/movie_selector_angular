import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './sign/signin/signin.component';
import { SignComponent } from './sign/sign.component';
import { SignupComponent } from './sign/signup/signup.component';
import { SignoutComponent } from './sign/signout/signout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OwngroupComponent } from './owngroup/owngroup.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthguardService } from './service/authguard.service';
import { CreategroupComponent } from './owngroup/creategroup/creategroup.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedefaultComponent } from './movie/moviedefault/moviedefault.component';
import { MoviefindComponent } from './movie/moviefind/moviefind.component';
import { GroupdetailComponent } from './owngroup/groupdetail/groupdetail.component';
import { JoingroupdetailComponent } from './joingroup/joingroupdetail/joingroupdetail.component';
import { AddjoingroupComponent } from './joingroup/addjoingroup/addjoingroup.component';
import { LeavejoingroupComponent } from './joingroup/leavejoingroup/leavejoingroup.component';
import { EventComponent } from './event/event.component';
import { VotingComponent } from './voting/voting.component';
import { JoineventComponent } from './joinevent/joinevent.component';
import { VotingdetailComponent } from './votingdetail/votingdetail.component';


const appRoutes:Routes = [
  {path:'',component:WelcomeComponent},
  {path:'sign', component: SignComponent},
  {path:'signin', component: SigninComponent},
  {path:'signout', canActivate: [AuthguardService], component: SignoutComponent},
  {path:'signup', component: SignupComponent},
  {path:'myprofile', canActivate: [AuthguardService], component: MyprofileComponent},
  {path:'owngroup', canActivate: [AuthguardService], component: OwngroupComponent, children:[
    {path:'creategroup',component:CreategroupComponent},
    {path:'detail/:id',component:GroupdetailComponent}
  ]},
  {path:'joingroup', canActivate: [AuthguardService], component: JoingroupComponent,children:[
    {path:'addjoingroup',component:AddjoingroupComponent},
    {path:'leavejoingroup',component:LeavejoingroupComponent},
    {path:'detail/:id',component:JoingroupdetailComponent}
  ]},
  {path:'movie',canActivate: [AuthguardService], component: MovieComponent,children:[
    {path:'default',component:MoviedefaultComponent},
    {path:'find',component:MoviefindComponent}
  ]},
  {path:'event', canActivate: [AuthguardService], children:[
    {path:':id',component:EventComponent}
  ]},
  {path:'joinevent', canActivate: [AuthguardService], children:[
    {path:':id',component:JoineventComponent}
  ]},
  {path:'voting', canActivate: [AuthguardService],  children:[
    {path:':id',component:VotingComponent}
  ]},
  {path:'votingdetail', canActivate: [AuthguardService], children:[
    {path:':id',component:VotingdetailComponent}
  ]},
  {path: 'not-found', component: PagenotfoundComponent},
  // {path: "**", redirectTo:'not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
