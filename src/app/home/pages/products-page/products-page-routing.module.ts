import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageParentComponent } from '@ebay/shared/layout/components';

import { ProductsPageComponent } from './products-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { 
        path: 'products',
        component: PageParentComponent,
        data: {
            component: ProductsPageComponent
        }
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
  
export class ProductsPageRoutingModule {}