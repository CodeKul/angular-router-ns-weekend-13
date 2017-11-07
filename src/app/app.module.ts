import { AppRouting } from './app.router';
import { ForegroundService } from './foreground.service';
import { BackgroundService } from './background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    CauroselComponent,
    SliderComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [BackgroundService, ForegroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
