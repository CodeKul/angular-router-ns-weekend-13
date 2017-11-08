import { ListingComponent } from './caurosel/listing.component';
import { ProfileComponent } from './caurosel/profile.component';
import { ForgetComponent } from './forget/forget.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegGuard } from './registration/reg.guard';

const dashRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'list', component: ListingComponent }
];

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'reg', component: RegistrationComponent },
    { path: 'dash/:usNm', component: CauroselComponent, children: dashRoutes, canActivate: [RegGuard] },
    { path: 'forget/:usNm', component: ForgetComponent },
    { path: 'dash', redirectTo: 'dash/sample' },
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(routes);
