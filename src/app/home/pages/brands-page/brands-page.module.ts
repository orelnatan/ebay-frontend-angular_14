import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { ElementsGridModule, PageLoaderModule } from '@ebay/shared/components';
import { BrandCardModule } from '@ebay/home/components';
import { PipesModule } from '@ebay/home/pipes';

import { BrandsPageRoutingModule } from './brands-page-routing.module';
import { BrandsPageComponent } from './brands-page.component';

@NgModule({
  declarations: [
    BrandsPageComponent,
  ],
  imports: [ 
    CommonModule,
    BrandsPageRoutingModule,
    LayoutModule,
    BrandCardModule,
    UtilsModule,
    ElementsGridModule,
    PageLoaderModule,
    PipesModule,
  ]
})
export class BrandsPageModule {}