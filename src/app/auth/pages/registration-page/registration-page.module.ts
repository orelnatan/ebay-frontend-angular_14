import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@ebay/shared/layout';
import { EbFormsModule } from '@ebay/shared/eb-forms';

import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
    declarations: [
        RegistrationPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        EbFormsModule,
        RouterModule.forChild([
            { path: '', component: RegistrationPageComponent },
        ])
    ],
})
export class RegistrationPageModule {}