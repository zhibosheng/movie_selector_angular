import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignComponent } from './sign/sign.component';
import { SignupComponent } from './sign/signup/signup.component';
import { SignoutComponent } from './sign/signout/signout.component';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OwngroupComponent } from './owngroup/owngroup.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes:Routes = [
  {path:'',component:WelcomeComponent},
  {path:'sign', component: SignComponent},
  {path:'signin', component: SigninComponent},
  {path:'signout', component: SignoutComponent},
  {path:'signup', component: SignupComponent},
  {path:'myprofile', component: MyprofileComponent},
  {path:'owngroup', component: OwngroupComponent},
  {path:'joingroup', component: JoingroupComponent},
  {path: 'not-found', component: PagenotfoundComponent},
  {path: "**", redirectTo:'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignComponent,
    SignupComponent,
    SignoutComponent,
    MyprofileComponent,
    OwngroupComponent,
    JoingroupComponent,
    PagenotfoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
