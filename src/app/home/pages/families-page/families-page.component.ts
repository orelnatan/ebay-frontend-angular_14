import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FamiliesService } from '@ebay/home/services';
import { IFamily } from '@ebay/shared/cards/models';

const CATEGORY_PARAM_NAME: string = "category";

@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent {
  families$: Observable<IFamily[]> = this.familiesService.fetchAll(this.categoryId);

  constructor(
      public readonly familiesService: FamiliesService,
      private readonly activatedRoute: ActivatedRoute
  ) {}

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(CATEGORY_PARAM_NAME)?.split('#')[1]!)
  }
}
