import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/home/models';

const PARAM_NAME: string = "brandId";

@Component({
    selector: 'categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
    categories$: Observable<ICategory[]>;

    constructor(
        public readonly categoriesService: CategoriesService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.categories$ = this.categoriesService.fetchAll(this.brandId);
    }

    get brandId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }
}
