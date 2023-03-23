import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';

import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
    declarations: [
        RegistrationPageComponent
    ],
    imports: [ 
        LayoutModule,
        RouterModule.forChild([
            { path: '', component: RegistrationPageComponent },
        ])
    ],
})
export class RegistrationPageModule {}