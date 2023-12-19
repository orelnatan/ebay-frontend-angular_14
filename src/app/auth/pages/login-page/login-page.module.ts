import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { SnackbarModule } from '@ebay/shared/snackbar';
import { EbFormsModule } from '@ebay/shared/eb-forms';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './components';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [ 
    LayoutModule,
    SnackbarModule,
    UtilsModule,
    FormsModule,
    EbFormsModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent },
    ])
  ],
})
export class LoginPageModule {}