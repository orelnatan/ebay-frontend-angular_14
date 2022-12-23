import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

import { StatisticsRootComponent } from './statistics-root.component';

@NgModule({
    declarations: [
        StatisticsRootComponent,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StatisticsRoutingModule,
        SharedModule,
        LayoutModule
    ],
})
export class StatisticsModule {}