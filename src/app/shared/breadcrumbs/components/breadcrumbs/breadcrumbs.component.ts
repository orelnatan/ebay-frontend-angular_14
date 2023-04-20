import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BreadcrumbsService } from '../../services';
import { ICrumb } from '../../models';

@Component({
    selector: 'breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
    @Input() name: string;

    @Input() uppercase: boolean;
    @Input() lowercase: boolean;

    crumbs$: BehaviorSubject<ICrumb[]> = this.breadcrumbsService.crumbs$;
    
    constructor(
        private readonly breadcrumbsService: BreadcrumbsService,
    ) {}  
}