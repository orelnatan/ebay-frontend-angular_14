import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        StatisticsRoutingModule,
        SharedModule,
        LayoutModule
    ],
})
export class StatisticsModule {}