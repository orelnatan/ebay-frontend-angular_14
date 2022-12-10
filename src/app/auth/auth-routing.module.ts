import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRootComponent } from './auth-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: AuthRootComponent, children:
        [
            { 
                path: 'login',
                loadChildren: () => import('./pages/login-page').then(login => login.LoginPageModule)
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class AuthRoutingModule {}