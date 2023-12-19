import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { ElementsGridModule, PageLoaderModule } from '@ebay/shared/components';
import { CategoryCardModule } from '@ebay/home/components';
import { PipesModule } from '@ebay/home/pipes';

import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
  declarations: [
    CategoriesPageComponent,
  ],
  imports: [ 
    CommonModule,
    CategoriesPageRoutingModule,
    LayoutModule,
    CategoryCardModule,
    UtilsModule,
    ElementsGridModule,
    PageLoaderModule,
    PipesModule,
  ]
})
export class CategoriesPageModule {}