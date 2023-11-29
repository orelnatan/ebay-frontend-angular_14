import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@ebay/shared/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
