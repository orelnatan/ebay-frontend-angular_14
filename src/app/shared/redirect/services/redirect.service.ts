import { Injectable } from "@angular/core";
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

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
        const snapshots: Snapshot[] = this._getRouterSnapshotsTree(this.router);
        
        const params: Params = this._getAllActivePathParams(snapshots);
        const route: string = this._getLastRedirectRoute(snapshots);
  
        this._url$.next(this._resolveRouteByPathParams(route, params));
      }
    })
  }

  public get url$(): BehaviorSubject<string> {
    return this._url$;
  }

  private _resolveRouteByPathParams(route: string, params: Params): string {
    return (route?.split("/") || []).map((route: string): void => {
      return params[route] || route
    }).join("/");
  }

  private _getLastRedirectRoute(snapshots: Snapshot[]): string {
    return snapshots.filter((snapshot: Snapshot) => {
      return snapshot?.data?.['redirect']
    }).pop()?.data?.["redirect"]
  }

  private _getAllActivePathParams(snapshots: Snapshot[]): Params {
    return snapshots.reduce((params: Params, snapshot: Snapshot) => {
      Object.keys(snapshot.params).forEach((key: string) => {
        params[key] = snapshot.params[key];
      });
      return params;
    }, {});
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