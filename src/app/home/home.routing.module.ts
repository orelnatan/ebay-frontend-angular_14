import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRootComponent } from './components';

const routes: Routes = [
    { path: '', redirectTo: 'brands', pathMatch: 'full' },
    { path: '', component: HomeRootComponent, children:
        [
            { 
                path: 'brands',
                loadChildren: () => import('./pages').then(brands => brands.BrandsPageModule)
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class HomeRoutingModule {}