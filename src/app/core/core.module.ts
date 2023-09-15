import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/shared/layout';
import { GlobalEventsModule } from '@ebay/shared/global-events';
import { AuthGuard } from '@ebay/auth/guards';

import { EbayLocalStorageService } from './services';
import { AppNavbarModule } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

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
        GlobalEventsModule,
    ],
    providers: [
        EbayLocalStorageService,
        AuthGuard
    ]
})
export class CoreModule {}