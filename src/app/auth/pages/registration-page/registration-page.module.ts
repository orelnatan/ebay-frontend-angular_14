import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EbFormsModule } from 'src/app/eb-forms/eb-forms.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
    declarations: [
        RegistrationPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        SharedModule,
        EbFormsModule,
        RouterModule.forChild([
            { path: '', component: RegistrationPageComponent },
        ])
    ],
})
export class RegistrationPageModule {}