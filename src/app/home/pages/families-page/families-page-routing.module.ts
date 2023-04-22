import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageParentComponent } from '@ebay/shared/layout/components';

import { FamiliesPageComponent } from './families-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'families', pathMatch: 'full' },
    { 
        path: 'families',
        component: PageParentComponent,
        data: {
            component: FamiliesPageComponent
        },
        children: [
            {
                path: ':familyId',
                loadChildren: () => import('../../pages/products-page').then(products => products.ProductsPageModule),
                data: { 
                    node: { skip: true }
                },
            }
        ],
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
  
export class FamiliesPageRoutingModule {}