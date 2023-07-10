import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoOverlayComponent } from './logo-overlay.component';

describe('LogoOverlayComponent', () => {
  let component: LogoOverlayComponent;
  let fixture: ComponentFixture<LogoOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoOverlayComponent]
    });
    fixture = TestBed.createComponent(LogoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
