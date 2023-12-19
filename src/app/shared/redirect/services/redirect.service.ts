import { Injectable } from "@angular/core";
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface NavigationData {
  params: Params;
  redirect: string;
}

@UntilDestroy()
@Injectable({ 
  providedIn: "root"
})
export class RedirectService {
  private _url$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(
    private readonly router: Router,
  ) {     
    this.router.events.pipe(untilDestroyed(this))
    .subscribe((event: RouterNavigationEvent): void => {
      if(event instanceof NavigationEnd) {
        const snapshots: Array<Snapshot> = this._resolveRouterSnapshotsTree(this.router);
        const navigationData: NavigationData = this._getLastNavigationData(snapshots);
  
        this._url$.next(this._routeToPathString(navigationData.redirect, navigationData.params));
      }
    })
  }

  public get url$(): BehaviorSubject<string> {
    return this._url$;
  }

  private _routeToPathString(route: string, params: Params): string {
    return (route?.split("/") || []).map((route: string): void => {
      return params[route] || route
    }).join("/");
  }

  private _getLastNavigationData(snapshots: Array<Snapshot>): NavigationData {
    let redirects: Snapshot[] = [];
    let params: Params = {};

    snapshots.forEach(snapshot => {
      params = { ...params, ...snapshot.params };

      if(snapshot?.data?.['redirect']) {
        redirects.push(snapshot)
      }
    });
    return { redirect: redirects.pop()?.data?.["redirect"], params: params }
  }

  private _resolveRouterSnapshotsTree(router: Router): Array<Snapshot> {
    const snapshots: Array<Snapshot> = [];
    
    let snapshot: Snapshot = router.routerState.snapshot.root;
    do {
      snapshots.push(snapshot)

      snapshot = snapshot.firstChild!;
    } while (snapshot);

    return snapshots;
  }
}