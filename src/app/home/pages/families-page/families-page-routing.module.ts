import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FamiliesService } from '@ebay/home/services';
import { EntityType } from '@ebay/home/models';
import { image } from '@ebay/assets/images';

import { FamiliesPageComponent } from './families-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'families', pathMatch: 'full' },
  { 
    path: 'families',
    component: FamiliesPageComponent,
    data: {
      redirect: "home/brands/brandId/categories",
      crumbs: [
        {
          path: "families",
          name: "Families",
          image: image("family.svg")
        }
      ]
    },
    children: [
      {
        path: 'create',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: FamiliesService,
          type: EntityType.Family,
          crumbs: [
            {
              path: "create/family",
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
          service: FamiliesService,
          type: EntityType.Family,
          crumbs: [
            {
              path: "update/family",
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
export class FamiliesPageRoutingModule {}