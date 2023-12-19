import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntityType } from '@ebay/home/models';
import { image } from '@ebay/assets/images';

import { EditEntityPageComponent } from './edit-entity-page.component';
import { EntityResolver } from './resolvers';
import { EntityFormGuard } from './guards';
import { 
  BrandFormComponent,
  CategoryFormComponent, 
  FamilyFormComponent, 
  ProductFormComponent 
} from './components';

const routes: Routes = [
  { path: '', component: EditEntityPageComponent, children: [
      {
        path: 'brand',
        component: BrandFormComponent,
        canDeactivate: [EntityFormGuard],
        data: {
          redirect: "home/brands",
          crumbs: [
            {
              path: null,
              name: "Brand",
              image: image("brand.svg")
            },
          ],
        },
        resolve: {
          entity: EntityResolver
        }
      },
      {
        path: 'category',
        component: CategoryFormComponent,
        canDeactivate: [EntityFormGuard],
        data: {
          redirect: "home/brands/brandId/categories",
          parent: EntityType.Brand,
          crumbs: [
            {
              path: null,
              name: "Category",
              image: image("category.svg")
            },
          ],
        },
        resolve: {
          entity: EntityResolver
        }
      },
      {
        path: 'family',
        component: FamilyFormComponent,
        canDeactivate: [EntityFormGuard],
        data: {
          redirect: "home/brands/brandId/categories/categoryId/families",
          parent: EntityType.Category,
          crumbs: [
            {
              path: null,
              name: "Family",
              image: image("family.svg")
            },
          ],
        },
        resolve: {
          entity: EntityResolver
        }
      },
      {
        path: 'product',
        component: ProductFormComponent,
        canDeactivate: [EntityFormGuard],
        data: {
          redirect: "home/brands/brandId/categories/categoryId/families/familyId/products",
          parent: EntityType.Family,
          crumbs: [
            {
              path: null,
              name: "Product",
              image: image("product.svg")
            },
          ],
        },
        resolve: {
          entity: EntityResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class EditEntityPageRoutingModule {}