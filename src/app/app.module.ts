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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LoggingService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
