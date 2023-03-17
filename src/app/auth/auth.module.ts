import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/layout/layout.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationService } from './services';
import { AuthGuard } from './guards';
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