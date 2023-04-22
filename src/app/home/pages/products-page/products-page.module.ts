import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { ProductsService } from '@ebay/home/services';
import { ProductCardModule } from '@ebay/home/components';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';

@NgModule({
    declarations: [
        ProductsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        ProductsPageRoutingModule,
        ProductCardModule,
        DirectivesModule,
        ElementsGridModule,
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsPageModule {}