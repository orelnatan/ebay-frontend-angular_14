import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EllipsisModule } from 'ngx-ellipsis';

import { DirectivesModule } from '@ebay/shared/directives';

import { EntityCardComponent } from './entity-card.component';

@NgModule({
    declarations: [
        EntityCardComponent,
    ],
    imports: [
        RouterModule,
        MatCardModule,
        MatButtonModule,
        EllipsisModule,
        DirectivesModule
    ],
    exports: [
        EntityCardComponent
    ]
})
export class EntityCardModule {}