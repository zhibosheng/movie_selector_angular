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

const appRoutes:Routes = [
  {path:'sign', component: SignComponent},
  {path:'signin', component: SigninComponent},
  {path:'signout', component: SignoutComponent},
  {path:'signup', component: SignupComponent}   
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
