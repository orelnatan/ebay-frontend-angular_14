import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicComponent } from 'ng-dynamic-component';

@Component({
  selector: 'page-parent',
  template: `
    <ndc-dynamic *ngIf="!outlet.isActivated"
        [ndcDynamicComponent]="component">
    </ndc-dynamic>

    <router-outlet #outlet="outlet"></router-outlet>
  `,
})
export class PageParentComponent implements OnInit {
    component: Type<DynamicComponent>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.component = this.activatedRoute.snapshot.data?.['component'];
    }
}