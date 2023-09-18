import { Component, Input } from '@angular/core';
import { Breakpoints } from '@ebay/shared/models';

@Component({
    selector: 'crumbs-navbar',
    templateUrl: './crumbs-navbar.component.html',
    styleUrls: ['./crumbs-navbar.component.scss'],
})
export class CrumbsNavbarComponent {
    breakpoints: typeof Breakpoints = Breakpoints;
    
    @Input() name: string;

}