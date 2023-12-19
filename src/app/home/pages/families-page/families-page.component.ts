import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { FamiliesService } from '@ebay/home/services';
import { IFamily } from '@ebay/home/models';

const PARAM_NAME: string = "categoryId";

@ComponentInterceptor([
  { type: GlobalEventTypes.Search, action: "search" },
  { type: GlobalEventTypes.Create, action: "create" }
], [Router, ActivatedRoute, FamiliesService])
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
  ) {}

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  search(event: CustomEvent): void {
    this.keyword = event.detail.keyword;
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
