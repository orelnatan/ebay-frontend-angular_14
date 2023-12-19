import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { image } from '@ebay/assets/images';

import { AuthGuard } from './guards';
import { AuthRootComponent } from './auth-root.component';

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
              image: image("password.svg")
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
              image: image("registration.svg")
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