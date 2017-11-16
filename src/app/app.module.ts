import { AppRouting } from './app.router';
import { ForegroundService } from './foreground.service';
import { BackgroundService } from './background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { HttpComponent } from './http/http.component';
import { WebDataService } from './http/web-data.service';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { FilterPipe } from './filter.pipe';

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
    ObservablesComponent,
    HttpComponent,
    PipesComponent,
    CustomPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BackgroundService,
    ForegroundService,
    RegGuard,
    WebDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
