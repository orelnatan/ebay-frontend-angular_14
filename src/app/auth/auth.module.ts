import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { AuthGuard } from '@ebay/shared/guards';
import { CrumbsbarModule } from '@ebay/shared/components';

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
        CrumbsbarModule
    ],
    providers: [
        AuthenticationService,
        AuthGuard
    ]
})
export class AuthModule {}