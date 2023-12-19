import { Pipe, PipeTransform } from '@angular/core';

import { IEntity } from '../models';

@Pipe({
   name: 'highlightTitles',
})
export class HighlightTitlesPipe implements PipeTransform {
  transform<T extends IEntity>(entities: T[], keyword: string): T[] { 
    return entities.map((entity: T) => {
      return {
        ... entity,
        name: this._highlightTitle(entity.name, keyword)
      }
    })
  }

  private _highlightTitle(title: string, keyword: string): string {
    return title.replace(new RegExp(keyword, "gi"), (match: string): string => {
      return `<mark>${match}</mark>`; 
    });
  }
}

