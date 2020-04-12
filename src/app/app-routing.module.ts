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


const appRoutes:Routes = [
  {path:'',component:WelcomeComponent},
  {path:'sign', component: SignComponent},
  {path:'signin', component: SigninComponent},
  {path:'signout', canActivate: [AuthguardService], component: SignoutComponent},
  {path:'signup', component: SignupComponent},
  {path:'myprofile', canActivate: [AuthguardService], component: MyprofileComponent},
  {path:'owngroup', canActivate: [AuthguardService], component: OwngroupComponent, children:[
    {path:'creategroup',component:CreategroupComponent}
  ]},
  {path:'joingroup', canActivate: [AuthguardService], component: JoingroupComponent},
  {path:'movie',canActivate: [AuthguardService], component: MovieComponent,children:[
    {path:'default',component:MoviedefaultComponent},
    {path:'find',component:MoviefindComponent}
  ]},
  {path: 'not-found', component: PagenotfoundComponent},
  {path: "**", redirectTo:'not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
