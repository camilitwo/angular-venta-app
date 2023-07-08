import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-logo-overlay',
  templateUrl: './logo-overlay.component.html',
  styleUrls: ['./logo-overlay.component.css']
})
export class LogoOverlayComponent {
  isWhiteBackground = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isWhiteBackground = offset > 0;

    if (this.isWhiteBackground) {
      this.renderer.addClass(this.elementRef.nativeElement, 'white');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'white');
    }
  }
}
