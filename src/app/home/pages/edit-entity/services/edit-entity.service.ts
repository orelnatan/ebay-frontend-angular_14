import { Injectable }  from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs'; 

import { IEntity } from '@ebay/home/models';

import { EditType } from '../models';

interface IEdit {
  entity: IEntity,
  type: EditType
}

@Injectable()
export class EditEntityService {
  private _edit$: Subject<IEdit> = new Subject<IEdit>();

  edit(type: EditType, entity?: IEntity) {
    this._edit$.next({ type: type, entity: entity! });
  }

  submit(type: EditType, callback: (entity: IEntity) => void): Subscription {
    return this._edit$.pipe(
      filter((edit: IEdit) => edit.type === type), 
      map((edit: IEdit) => edit.entity)
    ).subscribe(callback)
  }
}
