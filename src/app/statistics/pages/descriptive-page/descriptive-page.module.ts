import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from 'src/app/layout/layout.module';

import { DescriptivePageComponent } from './descriptive-page.component';

@NgModule({
    declarations: [
        DescriptivePageComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        RouterModule.forChild([
            { path: '', component: DescriptivePageComponent },
        ])
    ],
})
export class DescriptivePageModule {}