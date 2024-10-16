import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualmemoryComponent } from './visualmemory.component';

describe('VisualmemoryComponent', () => {
  let component: VisualmemoryComponent;
  let fixture: ComponentFixture<VisualmemoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualmemoryComponent]
    });
    fixture = TestBed.createComponent(VisualmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
