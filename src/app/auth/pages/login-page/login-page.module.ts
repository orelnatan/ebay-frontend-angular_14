import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { SnackbarModule } from '@ebay/shared/snackbar';
import { LoginFormModule } from '@ebay/auth/components';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    imports: [ 
        LayoutModule,
        SnackbarModule,
        DirectivesModule,
        LoginFormModule,
        RouterModule.forChild([
            { path: '', component: LoginPageComponent },
        ])
    ],
})
export class LoginPageModule {}