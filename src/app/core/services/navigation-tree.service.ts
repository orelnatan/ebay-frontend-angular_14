import { Injectable }  from '@angular/core';
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, QueryParamsHandling } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface INode {
    path: string;
    skip?: boolean;
    disabled?: boolean
}

@UntilDestroy()
@Injectable()
export class NavigationTreeService {
    private _previousNodeUrl: string;

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationEnd) {
                const snapshots: Array<Snapshot> = this._resolveRouterSnapshotsTree(this.router);
                const nodes: Array<INode> = this._buildActiveNodesTree(snapshots);

                this._previousNodeUrl = this._generatePreviousNodeUrl(nodes)!;
            }
        })
    }

    public get isCurrentNodeDisabled(): boolean {
        return this._previousNodeUrl ? false : true;
    }

    public restorePreviousNode(queryParamsHandling: QueryParamsHandling = "preserve"): void {
        this._previousNodeUrl ? this.router.navigate([ this._previousNodeUrl ], {
            queryParamsHandling: queryParamsHandling
        }) : null;
    }

    private _generatePreviousNodeUrl(nodes: Array<INode>): string |  null {
        if(nodes[nodes.length - 1]?.disabled) return null;
        
        nodes.pop();
        while(nodes[nodes.length - 1]?.skip) {
            nodes.pop();
        }

        return nodes.map(node => node.path).join("/");
    }

    private _buildActiveNodesTree(snapshots: Array<Snapshot>): Array<INode> {
        const nodes: Array<INode> = [];

        snapshots.forEach((snapshot: Snapshot) => {
            const node: INode = snapshot.routeConfig?.data?.["node"];

            const path: string = snapshot.url[0].path;

            nodes.push({ ...node, path })
        })

        return nodes;
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