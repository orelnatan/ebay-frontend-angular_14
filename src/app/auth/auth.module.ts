import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { AuthGuard } from '@ebay/shared/guards';

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
    ],
    providers: [
        AuthenticationService,
        AuthGuard
    ]
})
export class AuthModule {}