import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/layout/layout.module';

import { CoreRoutingModule } from './core-routing.module';
import { EbayLocalStorageService } from './services';
import { LogoutDirective } from './directives';
import { CoreRootComponent } from './core-root.component';

@NgModule({
    declarations: [
        CoreRootComponent,
        LogoutDirective,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        LayoutModule,
        MatDialogModule
    ],
    providers: [
        EbayLocalStorageService,
    ]
})
export class CoreModule {}