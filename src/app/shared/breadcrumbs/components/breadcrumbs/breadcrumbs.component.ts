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
  breadcrumbs$: BehaviorSubject<ICrumb[]> = this.breadcrumbsService.breadcrumbs$;

  @Input('showFirst') firsts: number;
  @Input('showLatest') latests: number;
  
  constructor(
    private readonly breadcrumbsService: BreadcrumbsService,
  ) {}  
}