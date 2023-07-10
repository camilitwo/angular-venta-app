import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralOverlayComponent } from './lateral-overlay.component';

describe('LateralOverlayComponent', () => {
  let component: LateralOverlayComponent;
  let fixture: ComponentFixture<LateralOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateralOverlayComponent]
    });
    fixture = TestBed.createComponent(LateralOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
