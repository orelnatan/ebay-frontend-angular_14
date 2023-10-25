import { Pipe, PipeTransform } from '@angular/core';
import { ICrumb } from '../models';

@Pipe({
   name: 'showFirst',
})
export class ShowFirstPipe implements PipeTransform {
    transform(crumbs: ICrumb[], amount: number): ICrumb[] {
        if(!amount || crumbs.length < amount) return crumbs;

        return [...crumbs].splice(0, amount);
    }
}