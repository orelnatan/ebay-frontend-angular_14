import { Component, Input } from '@angular/core';

import { BreakpointType } from '@ebay/shared/models';

@Component({
  selector: 'crumbs-navbar',
  templateUrl: './crumbs-navbar.component.html',
  styleUrls: ['./crumbs-navbar.component.scss'],
})
export class CrumbsNavbarComponent {
  @Input() showFirst: number;
  @Input() showLatest: number;

  breakpoints: typeof BreakpointType = BreakpointType;
}