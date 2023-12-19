import { Observable } from 'rxjs';  

import { IEntity } from '../models';

export abstract class EntitiesAbstractService {
  abstract fetchAll(parentId?: number): Observable<IEntity[]>;

  abstract fetchSingle(entityId: number, parentId: number): Observable<IEntity>;

  abstract dispose(): void;
}