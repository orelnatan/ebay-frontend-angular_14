import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@ebay/shared/guards';

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
                },
            },
            { 
                path: 'registration',
                loadChildren: () => import('./pages/registration-page').then(registration => registration.RegistrationPageModule),
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class AuthRoutingModule {}