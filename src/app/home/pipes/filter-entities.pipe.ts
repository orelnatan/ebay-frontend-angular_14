import { Pipe, PipeTransform } from '@angular/core';

import { IEntity } from '../models';

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