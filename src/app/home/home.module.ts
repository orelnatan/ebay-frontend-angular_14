import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { AuthGuard } from '@ebay/shared/guards';

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
        AuthGuard,
    ]
})
export class HomeModule {}