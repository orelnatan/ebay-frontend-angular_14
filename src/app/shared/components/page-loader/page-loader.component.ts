import { Component } from '@angular/core';

@Component({
  selector: 'page-loader',
  template: `
    <div [style.display]="'grid'" [style.place-items]="'center'" [style.height.%]="100">
      <spinner [diameter]="60" [strokeWidth]="4"></spinner>
    </div>
   `,
   styles: [`
    @import './src/assets/config/utils.scss';
    
    :host {
      height: 100%;
    }

    ::ng-deep circle { 
      stroke: #3F51B5 !important;
  }`]
})
export class PageLoaderComponent {}
