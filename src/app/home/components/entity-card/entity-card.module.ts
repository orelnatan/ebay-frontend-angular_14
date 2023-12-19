import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EllipsisModule } from 'ngx-ellipsis';

import { UtilsModule } from '@ebay/shared/utils';

import { EntityCardComponent } from './entity-card.component';

@NgModule({
  declarations: [
    EntityCardComponent,
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EllipsisModule,
    UtilsModule
  ],
  exports: [
    EntityCardComponent
  ]
})
export class EntityCardModule {}