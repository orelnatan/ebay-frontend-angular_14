import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '../layout/layout.module';

import { 
    EbayLocalStorageService,
} from './services';

@NgModule({
    imports: [ 
        HttpClientModule,
        BrowserAnimationsModule,
        LayoutModule,
    ],
    exports: [
        LayoutModule,
    ],
    providers: [
        EbayLocalStorageService,
    ]
})
export class CoreModule {}