import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescriptivePageComponent } from './descriptive-page.component';

const routes: Routes = [
    { path: '', component: DescriptivePageComponent, children: 
        [
            { 
                path: '', 
                redirectTo: 'frequency',
                pathMatch: 'full'
            },
            { 
                path: 'frequency',
                loadChildren: () => import('../../../home/home.module').then(home => home.HomeModule)
            },
            // { 
            //     path: 'frequency',
            //     loadChildren: () => import('./pages/frequency-measurement-page').then(frequency => frequency.FrequencyMeasurementPageModule)
            // }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class DescriptivePageRoutingModule {}