import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { CrumbsNavbarModule } from '@ebay/shared/components';

import { AuthenticationService } from './services';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthRootComponent } from './auth-root.component';

@NgModule({
  declarations: [
    AuthRootComponent,
  ],
  imports: [ 
    AuthRoutingModule,
    LayoutModule,
    CrumbsNavbarModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule {}