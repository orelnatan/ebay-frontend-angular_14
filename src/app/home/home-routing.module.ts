import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRootComponent } from './home-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'brands', pathMatch: 'full' },
    { path: '', component: HomeRootComponent, children:
        [
            { 
                path: 'brands',
                loadChildren: () => import('./pages/brands-page').then(brands => brands.BrandsPageModule)
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class HomeRoutingModule {}