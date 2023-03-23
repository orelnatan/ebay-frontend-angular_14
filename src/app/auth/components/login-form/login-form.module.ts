import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EbFormsModule } from '@ebay/shared/eb-forms';
import { DirectivesModule } from '@ebay/shared/directives';
import { ValidatorsModule } from '@ebay/auth/validators';

import { LoginFormComponent } from './login-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
    ],
    imports: [ 
        FormsModule,
        DirectivesModule,
        ValidatorsModule,
        EbFormsModule,
        RouterModule
    ],
    exports: [
        LoginFormComponent
    ]
})
export class LoginFormModule {}