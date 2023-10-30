import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards';
import { AuthRootComponent } from './auth-root.component';

const LOGIN_ICON: string = "../../assets/images/svg/password_white.svg";
const REGISTRATION_ICON: string = "../../assets/images/svg/app_registration_white.svg";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: AuthRootComponent, children:
    [
      { 
        path: 'login',
        loadChildren: () => import('./pages/login-page').then(login => login.LoginPageModule),
        canActivateChild: [AuthGuard],
        data: {
          blockWhileAuthenticated: true,
          crumbs: [
            {
              path: "login",
              name: "Login",
              image: LOGIN_ICON
            }
          ]
        },
      },
      { 
        path: 'registration',
        loadChildren: () => import('./pages/registration-page').then(registration => registration.RegistrationPageModule),
        data: {
          crumbs: [
            {
              path: "registration",
              name: "Registration",
              image: REGISTRATION_ICON
            }
          ]
        }
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}