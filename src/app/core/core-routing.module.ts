import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@ebay/shared/guards';
import { ICrumb } from '@ebay/shared/breadcrumbs/models';

import { CoreRootComponent } from './core-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: CoreRootComponent, children:
        [
            { 
                path: 'home',
                loadChildren: () => import('../home/home.module').then(home => home.HomeModule),
                canActivateChild: [AuthGuard],
                data: {
                    crumbs: [
                        {
                            path: "home",
                            name: "Home"
                        }
                    ] as Array<ICrumb>
                }
            },
            { 
                path: 'statistics',
                loadChildren: () => import('../statistics/statistics.module').then(statistics => statistics.StatisticsModule),
                canActivateChild: [AuthGuard],
                data: {
                    crumbs: [
                        {
                            path: "statistics",
                            name: "Statistics",
                        }
                    ] as Array<ICrumb>
                }
            }, 
            { 
                path: 'auth',
                loadChildren: () => import('../auth/auth.module').then(auth => auth.AuthModule),
                data: {
                    crumbs: [
                        {
                            path: "auth",
                            name: "Auth",
                        }
                    ] as Array<ICrumb>
                }
            },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
    providers: [AuthGuard]
})
  
export class CoreRoutingModule {}