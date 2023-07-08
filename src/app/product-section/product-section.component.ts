import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {

  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.preloadImages([
      'https://random.imagecdn.app/500/201',
      'https://random.imagecdn.app/500/205',
      'https://random.imagecdn.app/500/210',
      'https://random.imagecdn.app/500/200',
      'https://random.imagecdn.app/500/202',
      'https://random.imagecdn.app/500/203',
      'https://random.imagecdn.app/500/204',
      'https://random.imagecdn.app/500/206'
      // Agrega más URLs de imágenes que deseas precargar
    ]);
  }
  
  preloadImages(urls: string[]): void {
    for (const url of urls) {
      this.http.get(url, { responseType: 'blob' }).subscribe();
    }
  }

  initProduct(){
    this.router.navigate(['/products']);
  }
}
