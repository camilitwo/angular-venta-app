import { AfterViewInit, Component } from '@angular/core';
import * as jq from 'jquery';
import 'slick-carousel';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    $('.slick-carousel').slick({
      autoplay: true, // Activa el autoplay
      autoplaySpeed: 2500 // Establece el tiempo de cambio en milisegundos (2.5 segundos)
    });
  }

}
