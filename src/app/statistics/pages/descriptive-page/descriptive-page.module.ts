import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptivePageRoutingModule } from './descriptive-page-routing.module';

import { LayoutModule } from 'src/app/layout/layout.module';

import { DescriptivePageComponent } from './descriptive-page.component';

@NgModule({
    declarations: [
        DescriptivePageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        DescriptivePageRoutingModule
    ],
})
export class DescriptivePageModule {}