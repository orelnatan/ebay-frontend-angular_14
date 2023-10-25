import { Pipe, PipeTransform } from '@angular/core';
import { ICrumb } from '../models';

@Pipe({
   name: 'showLatest',
})
export class ShowLatestPipe implements PipeTransform {
    transform(crumbs: ICrumb[], amount: number): ICrumb[] {
        if(!amount || crumbs.length < amount) return crumbs;

        return [...crumbs].splice((crumbs.length - amount), amount);
    }
}