import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@ebay/auth/guards';

import { CoreRootComponent } from './core-root.component';

const HOME_ICON: string = "../../assets/images/svg/home_white.svg";
const AUTH_ICON: string = "../../assets/images/svg/vpn_key_white.svg";

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
                            name: "Home",
                            image: HOME_ICON
                        }
                    ]
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
                    ]
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
                            image: AUTH_ICON
                        }
                    ]
                }
            },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CoreRoutingModule {}