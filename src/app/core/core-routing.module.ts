import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@ebay/auth/guards';
import { image } from '@ebay/assets/images';

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
              name: "Home",
              image: image("home.svg")
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
              image: image("vpn_key.svg")
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
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}