import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';

import { StatisticsRoutingModule } from './statistics-routing.module';
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