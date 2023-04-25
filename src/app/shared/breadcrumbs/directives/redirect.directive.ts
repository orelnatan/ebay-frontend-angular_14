import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { BreadcrumbsService } from '../services';
import { ICrumb } from '../models';

@Directive({
    selector: '[redirect]',
})
export class RedirectDirective {
    @HostListener('click', ['$event']) onClick(event: Event): void {
        if(this.crumb.disabled) return;

        this._redirectByPath(this.crumb.path);
    };

    @Input('redirect') crumb: ICrumb;
    
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
