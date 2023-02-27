import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@ebay/layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
