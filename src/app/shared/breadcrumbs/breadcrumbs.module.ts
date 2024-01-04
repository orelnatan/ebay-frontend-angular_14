import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerModule } from '../components';

import { BreadcrumbsService } from './services';
import { ShowFirstPipe, ShowLatestPipe } from './pipes';
import { CrumbResolverDirective, CrumbRedirectDirective } from './directives';
import { BreadcrumbsComponent, CrumbComponent } from './components';

@NgModule({
  declarations: [ 
    BreadcrumbsComponent,
    CrumbComponent,
    CrumbRedirectDirective,
    CrumbResolverDirective,
    ShowFirstPipe,
    ShowLatestPipe
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    BreadcrumbsComponent,
  ],
})
export class BreadcrumbsModule {
  constructor(
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}
}