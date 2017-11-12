import { AppRouting } from './app.router';
import { ForegroundService } from './foreground.service';
import { BackgroundService } from './background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';
import { ProfileComponent } from './caurosel/profile.component';
import { ListingComponent } from './caurosel/listing.component';
import { RegGuard } from './registration/reg.guard';
import { RegDataDrivenComponent } from './reg-data-driven/reg-data-driven.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    CauroselComponent,
    SliderComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetComponent,
    ProfileComponent,
    ListingComponent,
    RegDataDrivenComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BackgroundService, ForegroundService, RegGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
