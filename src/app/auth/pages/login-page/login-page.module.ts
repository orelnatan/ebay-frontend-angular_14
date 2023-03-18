import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@ebay/shared/layout';
import { EbFormsModule } from '@ebay/shared/eb-forms';
import { DirectivesModule } from '@ebay/shared/directives';
import { SnackbarModule } from '@ebay/shared/snackbar';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        SnackbarModule,
        DirectivesModule,
        EbFormsModule,
        RouterModule.forChild([
            { path: '', component: LoginPageComponent },
        ])
    ],
})
export class LoginPageModule {}