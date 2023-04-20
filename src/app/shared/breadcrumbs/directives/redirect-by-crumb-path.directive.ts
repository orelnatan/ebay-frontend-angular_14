import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { BreadcrumbsService } from '../services';

@Directive({
    selector: '[redirectByCrumbPath]',
})
export class RedirectByCrumbPathDirective {
    @HostListener('click', ['$event']) onClick(event: Event): void {
        this._redirectByPath(this.path);
    };

    @Input('redirectByCrumbPath') path: string;
    
    constructor(
        private readonly router: Router,
        private readonly breadcrumbsService: BreadcrumbsService
    ) {}

    private _redirectByPath(path: string): void {
        const url: string = this._createRedirectUrl(path);
       
        this.router.navigate([`/${url}`], { queryParamsHandling: 'preserve' });
    }

    private _createRedirectUrl(path: string): string {
        const routes: Array<string> = this.breadcrumbsService.crumbs$
        .getValue()
        .map(crumb => crumb.path);
        
        return routes.slice(0, routes.indexOf(path) + 1).join("/");
    }
}
