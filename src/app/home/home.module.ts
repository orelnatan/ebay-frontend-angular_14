import { NgModule } from '@angular/core';

import { AuthGuard } from '@ebay/auth/guards';
import { LayoutModule } from '@ebay/layout/layout.module';

import { HomeRoutingModule } from './home-routing.module';
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