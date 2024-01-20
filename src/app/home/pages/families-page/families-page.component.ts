import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GEventTypes } from '@ebay/core/models';
import { Data, Interceptor, intercept } from '@ebay/shared/global-events';
import { FamiliesService } from '@ebay/home/services';
import { IFamily } from '@ebay/home/models';

const PARAM_NAME: string = "categoryId";

@Interceptor([
  { type: GEventTypes.Search, action: "search" },
  { type: GEventTypes.Create, action: "create" }
])
@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent {
  families$: Observable<IFamily[]> = this.familiesService.fetchAll(this.categoryId);

  keyword: string;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly familiesService: FamiliesService,
  ) {
    intercept(this);
  }

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  search(event: Data): void {
    this.keyword = event["keyword"];
  }

  update(family: IFamily): void {
    this.router.navigate(["update/family"], { 
      relativeTo: this.activatedRoute,
      queryParams: {
        entityId: family.id,
        parentId: this.categoryId
      }
    });
  }

  create(): void {
    this.router.navigate(["create/family"], {
      relativeTo: this.activatedRoute,
      queryParams: {
        parentId: this.categoryId 
      }
    })
  }
}
