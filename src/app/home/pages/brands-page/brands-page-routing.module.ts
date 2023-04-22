import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageParentComponent } from '@ebay/shared/layout/components';

import { BrandsPageComponent } from './brands-page.component';

const routes: Routes = [
    { 
        path: '',
        component: PageParentComponent,
        data: {
            component: BrandsPageComponent
        },
        children: [
            { 
                path: ':brandId',
                loadChildren: () => import('../../pages/categories-page').then(categories => categories.CategoriesPageModule),
                data: { 
                    node: { skip: true },
                },
            },
        ]
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
  
export class BrandsPageRoutingModule {}