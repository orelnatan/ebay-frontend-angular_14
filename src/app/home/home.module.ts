import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { AuthGuard } from '../auth/guards';

import { HomeRootComponent } from './home-root.component';

@NgModule({
    declarations: [
        HomeRootComponent,
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        LayoutModule
    ],
    providers: [
        AuthGuard
    ]
})
export class HomeModule {}