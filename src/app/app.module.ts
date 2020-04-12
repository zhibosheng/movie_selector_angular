import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignComponent } from './sign/sign.component';
import { SignupComponent } from './sign/signup/signup.component';
import { SignoutComponent } from './sign/signout/signout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OwngroupComponent } from './owngroup/owngroup.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoggingService } from './service/logging.service';
import { AuthguardService } from './service/authguard.service';
import { AuthService } from './service/auth.service';
import { OwngroupCommonComponent } from './owngroup/owngroup-common/owngroup-common.component';
import { JoingroupCommonComponent } from './joingroup/joingroup-common/joingroup-common.component';
import { CreategroupComponent } from './owngroup/creategroup/creategroup.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCommonComponent } from './movie/movie-common/movie-common.component';
import { MoviedefaultComponent } from './movie/moviedefault/moviedefault.component';
import { MoviefindComponent } from './movie/moviefind/moviefind.component';



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
    OwngroupCommonComponent,
    JoingroupCommonComponent,
    CreategroupComponent,
    MovieComponent,
    MovieCommonComponent,
    MoviedefaultComponent,
    MoviefindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoggingService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
