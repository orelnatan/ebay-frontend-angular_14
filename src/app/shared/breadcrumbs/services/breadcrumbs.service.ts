import { Injectable }  from '@angular/core';
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ICrumb } from '../models';

var get = require('lodash.get');

@UntilDestroy()
@Injectable({ providedIn: "root" })
export class BreadcrumbsService {
    private _crumbs$: BehaviorSubject<ICrumb[]> = new BehaviorSubject<ICrumb[]>([]);
    
    constructor(
        private readonly router: Router,
    ) {       
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationEnd) {
                const snapshots: Array<Snapshot> = this._resolveRouterSnapshotsTree(this.router);
                const crumbs: Array<ICrumb> = this._buildActiveCrumbsTree(snapshots)

                this._crumbs$.next(crumbs);
            }
        })
    }
    
    public get crumbs$(): BehaviorSubject<ICrumb[]> {
        return this._crumbs$;
    }

    private _buildActiveCrumbsTree(snapshots: Array<Snapshot>): Array<ICrumb> {
        const crumbs: Array<ICrumb> = [];

        snapshots.forEach((snapshot: Snapshot, sindex: number) => {
            const params: Params = snapshot.params;
            const routeCrumbs: Array<ICrumb> = snapshot.data?.["crumbs"] || [];
            
            routeCrumbs.forEach((crumb: ICrumb, cindex: number) => {
                const id: number = parseInt(`${sindex}${cindex}`);

                const path: string = params[crumb.path] || crumb.path;
                const route: string = snapshot.routeConfig?.path!;
                const name: string = crumb.name || "";

                const async: Promise<ICrumb> = get(snapshot.data, crumb.path) || crumb.async;
                
                crumbs.push({ ...crumb, id, path, route, name, async });
            });
        })
        console.log(crumbs)
        return crumbs;
    }

    private _resolveRouterSnapshotsTree(router: Router): Array<Snapshot> {
        const snapshots: Array<Snapshot> = [];

        let snapshot: Snapshot = router.routerState.snapshot.root;
        do {
            snapshots.push(snapshot)

            snapshot = snapshot.firstChild!;
        } while (snapshot);

        return snapshots.filter(snapshot => snapshot.url[0]);
    }
}
