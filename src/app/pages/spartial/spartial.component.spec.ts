import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartialComponent } from './spartial.component';

describe('SpartialComponent', () => {
  let component: SpartialComponent;
  let fixture: ComponentFixture<SpartialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpartialComponent]
    });
    fixture = TestBed.createComponent(SpartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
