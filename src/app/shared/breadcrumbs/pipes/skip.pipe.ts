import { Pipe, PipeTransform } from '@angular/core';
import { ICrumb } from '../models';

@Pipe({
   name: 'skip',
})
export class SkipPipe implements PipeTransform {
    transform(crumb: ICrumb, name: string): boolean {
        if(crumb.skip) return true;

        return crumb.parent ? crumb.parent != name : false;
    }
}