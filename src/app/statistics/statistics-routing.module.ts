import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsRootComponent } from './statistics-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'descriptive', pathMatch: 'full' },
    { path: '', component: StatisticsRootComponent, children:
        [
            { 
                path: 'descriptive',
                loadChildren: () => import('./pages/descriptive-page').then(descriptive => descriptive.DescriptivePageModule)
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
export class StatisticsRoutingModule {}