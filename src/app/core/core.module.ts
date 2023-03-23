import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/shared/layout';

import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';
import { EbayLocalStorageService } from './services';
import { DirectivesModule } from './directives';

@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        MatDialogModule,
        LayoutModule,
        DirectivesModule
    ],
    providers: [
        EbayLocalStorageService,
    ]
})
export class CoreModule {}