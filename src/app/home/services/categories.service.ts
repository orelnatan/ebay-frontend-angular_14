import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@ebay/env/environment';
import { GEventTypes } from '@ebay/core/models';
import { Interceptor, intercept } from '@ebay/shared/global-events';
import { ICategory } from '@ebay/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Interceptor([
  { type: GEventTypes.Logout, action: "dispose" }
])
@Injectable()
export class CategoriesService implements EntitiesAbstractService {
  private _categories: Record<number, ICategory[]> = {};

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    intercept(this);
  }
        
  fetchAll(brandId: number): Observable<ICategory[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append("brandId", brandId);
    
    return this._categories[brandId] ? observableOf(this._categories[brandId]) : this.httpClient.get<ICategory[]>(environment.apis.home.categories.byBrandId, {
      params: httpParams
    }).pipe(
      map((_categories: ICategory[]): ICategory[] => {
        this._categories[brandId] = _categories;
        
        return _categories;
      })
    );
  }

  fetchSingle(categoryId: number, brandId: number): Observable<ICategory> {
    return this._categories[brandId] ? observableOf(this.find(categoryId, brandId)) :
    this.fetchAll(brandId)
    .pipe(
      map((_categories: ICategory[]): ICategory => {
        this._categories[brandId] = _categories;
        
        return this.find(categoryId, brandId);
      })
    );
  }

  find(categoryId: number, brandId: number): ICategory {
    return { ...this._categories[brandId].find(category => categoryId == category.id)! }
  }

  dispose(): void {
    this._categories = {};
  }
}