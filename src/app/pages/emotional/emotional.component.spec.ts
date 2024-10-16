import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalComponent } from './emotional.component';

describe('EmotionalComponent', () => {
  let component: EmotionalComponent;
  let fixture: ComponentFixture<EmotionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionalComponent]
    });
    fixture = TestBed.createComponent(EmotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
