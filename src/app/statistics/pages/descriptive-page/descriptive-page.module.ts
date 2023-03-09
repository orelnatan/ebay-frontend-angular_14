import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/layout/layout.module';
import { SharedModule } from '@ebay/shared/shared.module';

import { DescriptivePageComponent } from './descriptive-page.component';

@NgModule({
    declarations: [
        DescriptivePageComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: DescriptivePageComponent },
        ])
    ],
})
export class DescriptivePageModule {}