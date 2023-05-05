import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'suffix',
})
export class SuffixPipe implements PipeTransform {
    transform(value: string | number, suffix: string): string { 
        return `${value}${suffix}`;
    }
}