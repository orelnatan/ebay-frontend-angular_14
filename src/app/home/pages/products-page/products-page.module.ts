import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { ElementsGridModule, PageLoaderModule } from '@ebay/shared/components';
import { ProductCardModule } from '@ebay/home/components';
import { PipesModule } from '@ebay/home/pipes';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
  ],
  imports: [ 
    CommonModule,
    ProductsPageRoutingModule,
    LayoutModule,
    ProductCardModule,
    PageLoaderModule,
    UtilsModule,
    ElementsGridModule,
    PipesModule,
  ]
})
export class ProductsPageModule {}