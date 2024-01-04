import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { BreadcrumbsService } from '../services';
import { ICrumb } from '../models';

@Directive({
  selector: '[crumbRedirect]',
})
export class CrumbRedirectDirective {
  @HostListener('click') onclick(): void {
    if(this.crumb.disabled) return;

    this._redirectById(this.crumb.id);
  };

  @Input('crumbRedirect') crumb: ICrumb;
  
  constructor(
    private readonly router: Router,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  private _resolveCurrentCrumbs(): Array<ICrumb> {
    return this.breadcrumbsService.breadcrumbs$
    .getValue();
  }

  private _redirectById(id: number): void {
    const url: string = this._createRedirectUrl(id);
    
    this.router.navigate([`/${url}`], { queryParamsHandling: 'preserve' });
  }

  private _createRedirectUrl(id: number): string {
    const crumbs: Array<ICrumb> = this._resolveCurrentCrumbs();

    const pathes: Array<string> = crumbs.map(
      crumb => crumb.path);

    const index: number = crumbs.map(
      crumb => crumb.id).indexOf(id);
    
    return pathes.slice(0, index + 1).join("/");
  }
}
