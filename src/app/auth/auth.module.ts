import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

import { AuthRootComponent } from './auth-root.component';

import { 
    AuthenticationService
} from './services';

@NgModule({
    declarations: [
        AuthRootComponent,
    ],
    imports: [ 
        AuthRoutingModule,
        SharedModule,
        LayoutModule
    ],
    providers: [
        AuthenticationService
    ]
})
export class AuthModule {}