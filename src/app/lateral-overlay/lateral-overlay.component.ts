import { Component } from '@angular/core';

@Component({
  selector: 'app-lateral-overlay',
  templateUrl: './lateral-overlay.component.html',
  styleUrls: ['./lateral-overlay.component.css']
})
export class LateralOverlayComponent {
  isMinimized = false;
  isClosed = false;

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  closeOverlay() {
    this.isClosed = true;
  }

}
