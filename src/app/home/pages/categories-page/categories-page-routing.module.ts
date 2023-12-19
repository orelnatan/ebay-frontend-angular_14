import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesService } from '@ebay/home/services';
import { EntityType } from '@ebay/home/models';
import { image } from '@ebay/assets/images';

import { CategoriesPageComponent } from './categories-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { 
    path: 'categories',
    component: CategoriesPageComponent,
    data: {
      redirect: "home/brands",
      crumbs: [
        {
          path: "categories",
          name: "Categories",
          image: image("category.svg")
        }
      ]
    },
    children: [
      {
        path: 'create',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: CategoriesService,
          type: EntityType.Category,
          crumbs: [
            {
              path: "create/category",
              name: "Create",
              image: image("add.svg")
            }
          ]
        },
      },
      {
        path: 'update',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: CategoriesService,
          type: EntityType.Category,
          crumbs: [
            {
              path: "update/category",
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
export class CategoriesPageRoutingModule {}