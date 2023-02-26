import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { 
    AuthenticationService
} from './services';

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