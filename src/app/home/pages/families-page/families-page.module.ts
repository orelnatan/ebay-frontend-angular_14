import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { ElementsGridModule, PageLoaderModule } from '@ebay/shared/components';
import { FamilyCardModule } from '@ebay/home/components';
import { PipesModule } from '@ebay/home/pipes';

import { FamiliesPageRoutingModule } from './families-page-routing.module';
import { FamiliesPageComponent } from './families-page.component';

@NgModule({
  declarations: [
    FamiliesPageComponent,
  ],
  imports: [ 
    CommonModule,
    FamiliesPageRoutingModule,
    LayoutModule,
    FamilyCardModule,
    PageLoaderModule,
    UtilsModule,
    ElementsGridModule,
    PipesModule,
  ]
})
export class FamiliesPageModule {}