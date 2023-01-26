import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { 
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
   },
   { 
      path: 'home',
      loadChildren: () => import('./home/home.module').then(home => home.HomeModule)
   },
   { 
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)
   },
   { 
      path: 'statistics',
      loadChildren: () => import('./statistics/statistics.module').then(statistics => statistics.StatisticsModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
