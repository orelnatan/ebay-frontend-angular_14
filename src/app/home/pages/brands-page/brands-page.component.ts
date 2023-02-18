import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
  ngOnInit(): void {
    console.log("BrandsPageComponent")
  }
}
