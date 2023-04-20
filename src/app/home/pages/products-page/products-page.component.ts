import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from '@ebay/home/services';
import { IProduct } from '@ebay/home/models';

const PARAM_NAME: string = "familyId";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
    products$: Observable<IProduct[]>;

    constructor(
        public readonly productsService: ProductsService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.products$ = this.productsService.fetchAll(this.familyId);
    }

    get familyId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME))
    }
}
