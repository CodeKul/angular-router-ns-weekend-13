import { ForgetComponent } from './forget/forget.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'reg', component: RegistrationComponent },
    { path: 'dash/:usNm', component: CauroselComponent },
    { path: 'forget/:usNm', component: ForgetComponent }
];

export const AppRouting = RouterModule.forRoot(routes);
