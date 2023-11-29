import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { SnackbarModule } from '@ebay/shared/snackbar';
import { EbFormsModule } from '@ebay/shared/eb-forms';

import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationFormComponent } from './components';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    RegistrationFormComponent,
  ],
  imports: [ 
    LayoutModule,
    DirectivesModule,
    SnackbarModule,
    EbFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: RegistrationPageComponent },
    ])
  ],
})
export class RegistrationPageModule {}