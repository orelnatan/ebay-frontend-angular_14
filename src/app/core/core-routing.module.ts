import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbPathResolver } from '@ebay/shared/breadcrumbs';

import { CoreRootComponent } from './core-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: CoreRootComponent, children:
        [
            { 
                path: 'home',
                loadChildren: () => import('../home/home.module').then(home => home.HomeModule),
                runGuardsAndResolvers: "always",
                data: {
                    breadcrumb: {
                        noSeperator: true
                    }
                },
                resolve: {
                    path: BreadcrumbPathResolver
                }
            },
            { 
                path: 'auth',
                loadChildren: () => import('../auth/auth.module').then(auth => auth.AuthModule),
                runGuardsAndResolvers: "always",
                data: {
                    breadcrumb: {
                        noSeperator: true
                    }
                },
                resolve: {
                    path: BreadcrumbPathResolver
                }
            },
            { 
                path: 'statistics',
                loadChildren: () => import('../statistics/statistics.module').then(statistics => statistics.StatisticsModule)
            }, 
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
})
  
export class CoreRoutingModule {}