import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterNavigationEvent } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'router-breadcrumbs',
    templateUrl: './router-breadcrumbs.component.html',
    styleUrls: ['./router-breadcrumbs.component.scss'],
})
export class RouterBreadcrumbsComponent {
    routes: Array<string> = [];

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationEnd) {   
                this.routes = this._resolveRoutes();
            }
        })
    }  

    navigate(index: number): void {       
        const path: string = this.routes.slice(0, index + 1).join("/");
     
        this.router.navigate([`/${path}`], { queryParamsHandling: 'preserve' });
    }

    private _resolveRoutes(): Array<string> {
        const routes: Array<string> = decodeURIComponent(window.location.pathname).split("/");
        routes.shift();
        
        return routes;
    }
}