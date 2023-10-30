import { NgModule } from '@angular/core';

import { SpinnerModule } from '@ebay/shared/components';

import { PageLoaderComponent } from './page-loader.component';

@NgModule({
  declarations: [
    PageLoaderComponent,
  ],
  imports: [
    SpinnerModule
  ],
  exports: [
    PageLoaderComponent
  ]
})
export class PageLoaderModule {}