import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';  

import { environment } from '@ebay/env/environment';
import { GlobalEventTypes } from '@ebay/core/models';
import { ServiceInterceptor } from '@ebay/shared/global-events';
import { IBrand } from '@ebay/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@ServiceInterceptor([
  { type: GlobalEventTypes.Logout, action: "dispose" }
], [HttpClient])
@Injectable()
export class BrandsService implements EntitiesAbstractService {
  private _brands: Array<IBrand> | null;

  constructor(
    private readonly httpClient: HttpClient
  ) {}
        
  fetchAll(): Observable<IBrand[]> {
    return this._brands ? observableOf(this._brands) : this.httpClient.get<IBrand[]>(environment.apis.home.brands.all)
    .pipe(
      map((_brands: IBrand[]): IBrand[] => {
        this._brands = _brands;
        
        return _brands;
      })
    )
  }

  fetchSingle(brandId: number): Observable<IBrand> {
    return this._brands ? observableOf(this.find(brandId)) :
    this.fetchAll()
    .pipe(
      map((_brands: IBrand[]): IBrand => {
        this._brands = _brands;

        return this.find(brandId);
      })
    )
  }

  find(brandId: number): IBrand {
    return { ...this._brands!.find(brand => brandId == brand.id)! }
  }

  dispose(): void {
    this._brands = null;
  }
}