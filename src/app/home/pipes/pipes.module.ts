import { NgModule } from '@angular/core';

import { FilterEntitiesPipe } from './filter-entities.pipe';
import { HighlightTitlesPipe } from './highlight-entities.pipe';

@NgModule({
  declarations: [
     FilterEntitiesPipe,
     HighlightTitlesPipe
  ],
  exports: [
    FilterEntitiesPipe,
    HighlightTitlesPipe
  ]
})
export class PipesModule {}