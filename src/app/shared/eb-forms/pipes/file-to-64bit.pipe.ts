import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'fileTo64Bit',
})
export class FileTo64BitPipe implements PipeTransform {
  transform(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader: FileReader = new FileReader();

      reader.onload = (event: ProgressEvent): void => {
        resolve(String((<FileReader>event.target).result));
      }
      file ? reader.readAsDataURL(file) : null;
    })
  }
}