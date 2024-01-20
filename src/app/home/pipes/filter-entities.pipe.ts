import { Pipe, PipeTransform } from '@angular/core';

import { IEntity } from '../models';
import { Interceptor } from '@ebay/shared/global-events';

@Interceptor()
@Pipe({
   name: 'filterEntities'
})
export class FilterEntitiesPipe implements PipeTransform {
  transform<T extends IEntity>(entities: T[], keyword: string): T[] { 
    return keyword ? entities.filter((entity: T): boolean => {
      return (entity.name).toLowerCase().includes((keyword).toLowerCase())
    }) : entities;
  }
}