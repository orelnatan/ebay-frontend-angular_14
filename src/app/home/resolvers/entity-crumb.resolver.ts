import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbAbstractResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { EntitiesAbstractService } from '../services';
import { EntityType, IEntity } from '../models';

@Injectable()
export class EntityCrumbResolver implements BreadcrumbAbstractResolver {
  constructor(
    public readonly titleCasePipe: TitleCasePipe,
    public readonly service: EntitiesAbstractService,
    public readonly entity: EntityType,
    public readonly parent?: EntityType,
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>> { 
    return observableOf(
      lastValueFrom(this.service.fetchSingle(routeSnapshot.params?.[`${this.entity}Id`], routeSnapshot.params?.[`${this.parent}Id`]))
      .then((entity: IEntity) => {
        return {
          name: this.titleCasePipe.transform(entity.name),
          image: entity.image,
        } as ICrumb
      })
    )
  }
}

