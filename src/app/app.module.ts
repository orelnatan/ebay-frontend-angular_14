import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppRootComponent } from './app-root.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
