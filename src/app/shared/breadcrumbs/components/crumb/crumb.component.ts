import { Component, Input } from '@angular/core';

import { BreadcrumbsService } from '../../services';
import { ICrumb } from '../../models';

@Component({
    selector: 'crumb',
    templateUrl: './crumb.component.html',
    styleUrls: ['./crumb.component.scss'],
})
export class CrumbComponent {
    @Input() crumb: ICrumb;
    
    constructor(
        private readonly breadcrumbsService: BreadcrumbsService,
    ) {}  
}