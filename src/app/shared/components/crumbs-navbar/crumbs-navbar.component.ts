import { Component, Input } from '@angular/core';

import { BreakpointType } from '@ebay/shared/models';

@Component({
  selector: 'crumbs-navbar',
  templateUrl: './crumbs-navbar.component.html',
  styleUrls: ['./crumbs-navbar.component.scss'],
})
export class CrumbsNavbarComponent {
  @Input() showFirstOnDesktop: number;
  @Input() showFirstOnMobile: number;
  @Input() showLatestOnDesktop: number;
  @Input() showLatestOnMobile: number;

  breakpoints: typeof BreakpointType = BreakpointType;
}