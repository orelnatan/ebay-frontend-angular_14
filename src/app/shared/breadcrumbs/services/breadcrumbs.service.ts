import { Injectable }  from '@angular/core';
import { NavigationStart, Router, Event as RouterNavigationEvent, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ICrumb } from '../models';

@UntilDestroy()
@Injectable({
    providedIn: "root"
})
export class BreadcrumbsService {
    private _crumbs: Array<ICrumb> = [];
    private _crumbs$: BehaviorSubject<ICrumb[]> = new BehaviorSubject<ICrumb[]>([]);
    
    constructor(
        private readonly router: Router,
    ) {
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationStart) {
                this._crumbs = [];                
            }

            if(event instanceof NavigationEnd) {
                this._crumbs$.next(this._crumbs);
            }
        })
    }
    
    public get crumbs$(): BehaviorSubject<ICrumb[]> {
        return this._crumbs$
    }

    public addCrumb(crumb: ICrumb): void {     
        this._crumbs.push(crumb);
    }
}
