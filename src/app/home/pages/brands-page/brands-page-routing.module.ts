import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandsService } from '@ebay/home/services';
import { EntityType } from '@ebay/home/models';
import { image } from '@ebay/assets/images';

import { BrandsPageComponent } from './brands-page.component';

const routes: Routes = [
  { 
    path: '', component: BrandsPageComponent,
    children: [
      {
        path: 'create',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: BrandsService,
          type: EntityType.Brand,
          crumbs: [
            {
              path: "create/brand",
              name: "Create",
              image: image("add.svg")
            },
          ],
        }
      },
      {
        path: 'update',
        loadChildren: () => import('../edit-entity').then(create => create.EditEntityPageModule),
        data: {
          service: BrandsService,
          type: EntityType.Brand,
          crumbs: [
            {
              path: "update/brand",
              name: "Update",
              image: image("edit.svg")
            },
          ],
        }
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BrandsPageRoutingModule {}