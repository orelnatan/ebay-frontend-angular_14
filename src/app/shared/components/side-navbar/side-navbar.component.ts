import { Component } from '@angular/core';

import { GlobalEventTypes } from '@ebay/core/models';
import { Interceptor } from '@ebay/shared/global-events';

const ANIMATION_DELAY: number = 500;

@Interceptor([{ type: GlobalEventTypes.Sidebar, action: "toggleSidebar" }])
@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
    render: boolean;

    animationForwards: boolean;
    animationBackwards: boolean

    public toggleSidebar(): void {
        this.render ? this._closeSidbar() : this._openSidebar();
    }

    private _openSidebar(): void {
        this.animationForwards = true;
        this.animationBackwards = false;
        
        this.render = true;
    }

    private _closeSidbar(): void {
        this.animationForwards = false;
        this.animationBackwards = true;

        setTimeout(() => {
            this.render = false;
        }, ANIMATION_DELAY);
    }
}
