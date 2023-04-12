import { Injectable, }  from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

interface INode {
    path: string;
    skip: boolean;
    disabled: boolean
}

@Injectable()
export class NavigationTreeService {
    constructor(
        private readonly router: Router,
    ) {}

    public restorePreviousNode(): void {
        const snapshots = this._resolveRouterSnapshotsTree(this.router);
        
        const nodes: Array<INode> = this._buildActiveNodesTree(snapshots);
        const path: string | null = this._buildNavigationUrlPath(nodes);

        path ? this.router.navigate([ path ], { queryParamsHandling: "preserve" }) : null;
    }

    private _buildNavigationUrlPath(nodes: Array<INode>): string |  null {
        if(nodes[nodes.length - 1]?.disabled) return null;
        
        nodes.pop();
        while(nodes[nodes.length - 1]?.skip) {
            nodes.pop();
        }

        return nodes.map(node => node.path).join("/");
    }

    private _buildActiveNodesTree(snapshots: Array<ActivatedRouteSnapshot>): Array<INode> {
        const nodes: Array<INode> = [];

        snapshots.forEach((snapshot: ActivatedRouteSnapshot) => {
            const node: INode = snapshot.routeConfig?.data?.["node"];

            const path: string = snapshot.url[0].path;
            const skip: boolean = node?.skip || false;
            const disabled: boolean = node?.disabled || false;

            nodes.push({ path, skip, disabled })
        })

        return nodes;
    }

    private _resolveRouterSnapshotsTree(router: Router): Array<ActivatedRouteSnapshot> {
        const snapshots: Array<ActivatedRouteSnapshot> = [];

        let snapshot: ActivatedRouteSnapshot = router.routerState.snapshot.root;
        do {
            snapshots.push(snapshot)

            snapshot = snapshot.firstChild!;
        } while (snapshot);

        return snapshots.filter(snapshot => snapshot.url[0]);
    }
}