import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'fileTo64Bit',
})
export class FileTo64BitPipe implements PipeTransform {
  transform(value: File | string): Promise<string> {
    if(typeof value === "string") return new Promise((resolve) => {
      resolve(value)
    })

    return new Promise((resolve) => {
      const reader: FileReader = new FileReader();

      reader.onload = (event: ProgressEvent): void => {
        resolve(String((<FileReader>event.target).result));
      }
      value ? reader.readAsDataURL(value) : null;
    })
  }
}