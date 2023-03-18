import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ComponentsModule } from '@ebay/shared/components';
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
        DirectivesModule,
        ComponentsModule,
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