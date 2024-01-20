import { Component } from '@angular/core';

import { GEventTypes } from '@ebay/core/models';
import { Interceptor, intercept } from '@ebay/shared/global-events';
import { BreakpointType } from '@ebay/shared/models';

const ANIMATION_DELAY: number = 500;

@Interceptor(
  [{ type: GEventTypes.Toggle, action: "toggle" }]
)
@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
  breakpoints: typeof BreakpointType = BreakpointType;
  
  toggleSidebar: boolean;
  animationForwards: boolean;
  animationBackwards: boolean;

  constructor() {
    intercept(this);
  }
  
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
