import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'lastItem',
   standalone: true
})
export class LastItemPipe<T> implements PipeTransform {
    transform(items: Array<T>): T {
        return items[items.length - 1];
    }
}