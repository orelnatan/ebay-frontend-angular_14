import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/shared/layout';
import { SideNavbarModule } from '@ebay/shared/components';
import { GlobalEventsModule } from '@ebay/shared/global-events';

import { EbayLocalStorageService } from './services';
import { DirectivesModule } from './directives';
import { AppNavbarModule } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

import { AuthGuard } from './guards';

@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        MatDialogModule,
        AppNavbarModule,
        LayoutModule,
        SideNavbarModule,
        DirectivesModule,
        GlobalEventsModule,
    ],
    providers: [
        EbayLocalStorageService,
        AuthGuard
    ]
})
export class CoreModule {}