import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/layout/layout.module';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ],
})
export class BrandsPageModule {}