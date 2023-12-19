import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { LayoutModule } from '@ebay/shared/layout';
import { UtilsModule } from '@ebay/shared/utils';
import { ElementsGridModule, PageLoaderModule } from '@ebay/shared/components';

import { ProductSpecPageComponent } from './product-spec-page.component';
import { ProductHeaderComponent, ProductSpecItemComponent } from './components';

@NgModule({
  declarations: [
    ProductSpecPageComponent,
    ProductHeaderComponent,
    ProductSpecItemComponent
  ],
  imports: [ 
    CommonModule,
    LayoutModule,
    UtilsModule,
    PageLoaderModule,
    ElementsGridModule,
    NgxSkeletonLoaderModule,
    UtilsModule,
    RouterModule.forChild([
      { 
        path: '',
        component: ProductSpecPageComponent,
        data: {
          redirect: "home/brands/brandId/categories/categoryId/families/familyId/products",
        }
      },
    ])
  ]
})
export class ProductSpecPageModule {}