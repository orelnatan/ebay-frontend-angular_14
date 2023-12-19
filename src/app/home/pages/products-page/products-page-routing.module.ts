import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsService } from '@ebay/home/services';
import { EntityType } from '@ebay/home/models';
import { image } from '@ebay/assets/images';

import { ProductsPageComponent } from './products-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { 
    path: 'products',
    component: ProductsPageComponent,
    data: {
      redirect: "home/brands/brandId/categories/categoryId/families",
      crumbs: [
        {
          path: "products",
          name: "Products",
          image: image("product.svg")
        } 
      ]
    },
    children: [
      {
        path: 'create',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: ProductsService,
          type: EntityType.Product,
          crumbs: [
            {
              path: "create/product",
              name: "Create",
              image: image("add.svg")
            }
          ]
        }
      },
      {
        path: 'update',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: ProductsService,
          type: EntityType.Product,
          crumbs: [
            {
              path: "update/product",
              name: "Update",
              image: image("edit.svg")
            }
          ]
        }
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ProductsPageRoutingModule {}