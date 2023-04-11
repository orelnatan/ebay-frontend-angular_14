import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@ebay/shared/guards';
import { BreadcrumbPathResolver } from '@ebay/shared/breadcrumbs';

import { AuthRootComponent } from './auth-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: AuthRootComponent, children:
        [
            { 
                path: 'login',
                loadChildren: () => import('./pages/login-page').then(login => login.LoginPageModule),
                canActivateChild: [AuthGuard],
                runGuardsAndResolvers: "always",
                data: {
                    blockWhileAuthenticated: true,
                },
                resolve: {
                    path: BreadcrumbPathResolver
                }
            },
            { 
                path: 'registration',
                loadChildren: () => import('./pages/registration-page').then(registration => registration.RegistrationPageModule),
                runGuardsAndResolvers: "always",
                resolve: {
                    path: BreadcrumbPathResolver
                }
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class AuthRoutingModule {}