import { NgModule } from '@angular/core';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { StatisticsRootComponent } from './statistics-root.component';

@NgModule({
    declarations: [
        StatisticsRootComponent,
    ],
    imports: [ 
        StatisticsRoutingModule,
        LayoutModule
    ],
})
export class StatisticsModule {}