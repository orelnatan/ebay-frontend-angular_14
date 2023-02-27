import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@ebay/layout/layout.module';

import { CoreRoutingModule } from './core-routing.module';

import { 
    EbayLocalStorageService,
} from './services';

import { 
    LogoutComponent
} from './components';

import { CoreRootComponent } from './core-root.component';


@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        LayoutModule,
        LogoutComponent
    ],
    providers: [
        EbayLocalStorageService,
    ]
})
export class CoreModule {}