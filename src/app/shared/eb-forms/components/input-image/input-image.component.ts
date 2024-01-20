import { AfterContentChecked, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ImgBBService } from '../../services';
import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent extends BaseInputComponent implements AfterContentChecked {  
  @Input() value: string;
  @Input() default: string;
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();

  url$: Observable<string>;

  constructor(
    private readonly imgBBService: ImgBBService 
  ) {
    super();
  }

  ngAfterContentChecked(): void {
    this.control?.setValue(this.value ? this.value : null);
  }

  handleChange(file: File): void {
    if(!file) return;
    
    this.url$ = this.imgBBService.upload(file);
  }
}