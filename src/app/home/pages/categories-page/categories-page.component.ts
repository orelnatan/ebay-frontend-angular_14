import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/home/models';

const PARAM_NAME: string = "brandId";

@ComponentInterceptor(
    [{ type: GlobalEventTypes.Search, action: "onSearch" }], [CategoriesService, ActivatedRoute]
)
@Component({
    selector: 'categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
    categories$: Observable<ICategory[]> = this.categoriesService.fetchAll(this.brandId);

    keyword: string;

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    get brandId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }

    onSearch(event: CustomEvent): void {
        this.keyword = event.detail.keyword;
    }
}
