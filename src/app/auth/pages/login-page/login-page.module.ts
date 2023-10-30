import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { SnackbarModule } from '@ebay/shared/snackbar';
import { EbFormsModule } from '@ebay/shared/eb-forms';
import { ValidatorsModule } from '@ebay/auth/validators';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [ 
    CommonModule,
    LayoutModule,
    SnackbarModule,
    DirectivesModule,
    FormsModule,
    ValidatorsModule,
    EbFormsModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent },
    ])
  ],
})
export class LoginPageModule {}