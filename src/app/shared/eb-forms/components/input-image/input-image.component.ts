import { AfterContentChecked, Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';
import { ImgBBService } from '../../services';
import { Observable } from 'rxjs';

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