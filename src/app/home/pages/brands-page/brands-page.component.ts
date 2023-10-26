import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { BrandsService } from '@ebay/home/services';
import { IBrand } from '@ebay/home/models';

@ComponentInterceptor(
    [{ type: GlobalEventTypes.Search, action: "onSearch" }], [BrandsService]
)
@Component({
    selector: 'brands-page',
    templateUrl: './brands-page.component.html',
    styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent {
    brands$: Observable<IBrand[]> = this.brandsService.fetchAll();

    keyword: string;

    constructor(
        private readonly brandsService: BrandsService
    ) {}

    onSearch(event: CustomEvent): void {
        this.keyword = event.detail.keyword;
    }
}
