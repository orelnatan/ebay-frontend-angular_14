import { Injectable, Injector }  from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';

import { EntitiesAbstractService } from '@ebay/home/services';
import { EntityType, IEntity } from '@ebay/home/models';

@Injectable()
export class EntityResolver implements Resolve<Observable<Observable<Partial<IEntity>>>> {
  constructor(
    private readonly injector: Injector,
) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Observable<Partial<IEntity>>> {
    const service: EntitiesAbstractService = this.injector.get<EntitiesAbstractService>(routeSnapshot.parent?.data['service']);
    const parent: EntityType = routeSnapshot.data['parent'];
    
    const parentId: number | null = Number(routeSnapshot.queryParamMap.get("parentId")) || null;
    const entityId: number | null = Number(routeSnapshot.queryParamMap.get("entityId")) || null;

    return observableOf(entityId ? service.fetchSingle(entityId, parentId!) : observableOf({
      [`${parent}Id`]: parentId
    } as Partial<IEntity>))
  }
}