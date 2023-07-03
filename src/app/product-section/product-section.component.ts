import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {

  constructor( private router: Router ) { }

  initProduct(){
    this.router.navigate(['/products']);
  }
}
