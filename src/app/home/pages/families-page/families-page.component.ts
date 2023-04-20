import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FamiliesService } from '@ebay/home/services';
import { IFamily } from '@ebay/home/models';

const PARAM_NAME: string = "categoryId";

@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent implements OnInit {
  families$: Observable<IFamily[]>;

  constructor(
      public readonly familiesService: FamiliesService,
      private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.families$ = this.familiesService.fetchAll(this.categoryId);
  }

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME))
  }
}
