import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BrandsService } from '@ebay/home/services';
import { BrandCardModule } from '@ebay/home/components';

import { BrandsPageRoutingModule } from './brands-page-routing.module';
import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        BrandsPageRoutingModule,
        BrandCardModule,
        DirectivesModule,
        ElementsGridModule,
    ],
    providers: [
        BrandsService
    ]
})
export class BrandsPageModule {}