import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/layout/layout.module';
import { SharedModule } from '@ebay/shared/shared.module';
import { BrandsService } from '@ebay/home/services';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ],
    providers: [
        BrandsService
    ]
})
export class BrandsPageModule {}