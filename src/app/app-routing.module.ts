import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { 
      path: '',
      redirectTo: 'home',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
