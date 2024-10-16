import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenendedComponent } from './openended.component';

describe('OpenendedComponent', () => {
  let component: OpenendedComponent;
  let fixture: ComponentFixture<OpenendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenendedComponent]
    });
    fixture = TestBed.createComponent(OpenendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
