import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { FamiliesService } from '@ebay/home/services';
import { IFamily } from '@ebay/home/models';

const PARAM_NAME: string = "categoryId";

@ComponentInterceptor(
    [{ type: GlobalEventTypes.Search, action: "onSearch" }], [FamiliesService, ActivatedRoute]
)
@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent {
    families$: Observable<IFamily[]> = this.familiesService.fetchAll(this.categoryId);

    keyword: string;

    constructor(
        private readonly familiesService: FamiliesService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    get categoryId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }

    onSearch(event: CustomEvent): void {
        this.keyword = event.detail.keyword;
    }
}
