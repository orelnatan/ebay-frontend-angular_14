import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageParentComponent } from '@ebay/shared/layout/components';

import { CategoriesPageComponent } from './categories-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { 
        path: 'categories',
        component: PageParentComponent,
        data: {
            component: CategoriesPageComponent
        },
        children: [
            { 
                path: ':categoryId',
                loadChildren: () => import('../../pages/families-page').then(families => families.FamiliesPageModule),
                data: { 
                    node: { skip: true }
                },
            }
        ]
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
  
export class CategoriesPageRoutingModule {}