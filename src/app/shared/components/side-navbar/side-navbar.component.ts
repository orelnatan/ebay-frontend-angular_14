import { Component } from '@angular/core';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { Breakpoints } from '@ebay/shared/models';

const ANIMATION_DELAY: number = 500;

@ComponentInterceptor([{ type: GlobalEventTypes.Toggle, action: "toggle" }])
@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
    breakpoints: typeof Breakpoints = Breakpoints;
    
    toggleSidebar: boolean;
    animationForwards: boolean;
    animationBackwards: boolean;

    public toggle(): void {
        this.toggleSidebar ? this._closeSidbar() : this._openSidebar();
    }

    private _openSidebar(): void {
        this.animationForwards = true;
        this.animationBackwards = false;
        
        this.toggleSidebar = true;
    }

    private _closeSidbar(): void {
        this.animationForwards = false;
        this.animationBackwards = true;

        setTimeout(() => {
            this.toggleSidebar = false;
        }, ANIMATION_DELAY);
    }
}
