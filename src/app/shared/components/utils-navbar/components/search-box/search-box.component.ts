import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatInput } from '@angular/material/input';

@UntilDestroy()
@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchboxComponent {
  @ViewChild(MatInput, { static: true }) input: MatInput;
  
  @Output() search: EventEmitter<string> = new EventEmitter();

  subject$: Subject<string> = new Subject();

  constructor() {     
    this.subject$.pipe(
      untilDestroyed(this),
      debounceTime(1000)
    ).subscribe((value: string) => {
      this.search.emit(value);
    })
  }

  setValue(value: string): void {
    this.input.value = value;
  }
}