import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/layout/layout.module';
import { SharedModule } from '@ebay/shared/shared.module';
import { BrandsService } from '@ebay/home/services';
import { BrandCardComponent, EntityCardComponent } from '@ebay/home/components';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent,
        BrandCardComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SharedModule,
        EntityCardComponent,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ],
    providers: [
        BrandsService
    ]
})
export class BrandsPageModule {}