import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

import { 
    EbayLocalStorageService,
} from './services';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
    ],
    exports: [
        LayoutModule,
        SharedModule
    ],
    providers: [
        EbayLocalStorageService
    ]
})
export class CoreModule {}