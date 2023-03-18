import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/shared/layout';

import { EbayLocalStorageService } from './services';
import { LogoutDirective } from './directives';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

@NgModule({
    declarations: [
        CoreRootComponent,
        LogoutDirective,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        MatDialogModule,
        LayoutModule,
    ],
    providers: [
        EbayLocalStorageService,
    ]
})
export class CoreModule {}