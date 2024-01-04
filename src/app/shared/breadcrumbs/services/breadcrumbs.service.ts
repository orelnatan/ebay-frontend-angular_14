import { Injectable }  from '@angular/core';
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ICrumb } from '../models';

@UntilDestroy()
@Injectable({ 
  providedIn: "root"
})
export class BreadcrumbsService {
  private _breadcrumbs$: BehaviorSubject<ICrumb[]> = new BehaviorSubject<ICrumb[]>([]);
  
  constructor(
    private readonly router: Router,
  ) {     
    this.router.events.pipe(untilDestroyed(this))
    .subscribe((event: RouterNavigationEvent): void => {
      if(event instanceof NavigationEnd) {
        const snapshots: Snapshot[] = this._getRouterSnapshotsTree(this.router);
        const breadcrumbs: ICrumb[] = this._buildBreadcrumbsArray(snapshots)

        this._breadcrumbs$.next(breadcrumbs);
      }
    })
  }
  
  public get breadcrumbs$(): BehaviorSubject<ICrumb[]> {
    return this._breadcrumbs$;
  }

  private _buildBreadcrumbsArray(snapshots: Snapshot[]): ICrumb[] {
    const breadcrumbs: ICrumb[] = [];

    snapshots.forEach((snapshot: Snapshot, sindex: number): void => {
      const params: Params = snapshot.params;
      const crumbs: ICrumb[] = snapshot?.routeConfig?.data?.["crumbs"];
      
      crumbs?.forEach((crumb: ICrumb, cindex: number): void => {
        const id: number = parseInt(`${sindex}${cindex}`);

        const path: string = params[crumb.path] || crumb.path;
        const name: string = crumb.name || "";

        const async: Promise<ICrumb> = snapshot.data[crumb.resolve!];
        
        breadcrumbs.push({ ...crumb, id, path, name, async });
      });
    })
    return breadcrumbs;
  }

  private _getRouterSnapshotsTree(router: Router): Snapshot[] {
    const snapshots: Snapshot[] = [];
    
    let snapshot: Snapshot = router.routerState.snapshot.root;
    do {
      snapshots.push(snapshot)

      snapshot = snapshot.firstChild!;
    } while (snapshot);
    
    return snapshots;
  }
}
