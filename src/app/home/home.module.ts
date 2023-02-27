import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { AuthGuard } from '../auth/guards';

import { HomeRootComponent } from './home-root.component';

@NgModule({
    declarations: [
        HomeRootComponent,
    ],
    imports: [ 
        HomeRoutingModule,
        LayoutModule
    ],
    providers: [
        AuthGuard
    ]
})
export class HomeModule {}