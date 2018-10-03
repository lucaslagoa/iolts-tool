import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformDotToIotsComponent } from './transform-dot-to-iots.component';

describe('TransformDotToIotsComponent', () => {
  let component: TransformDotToIotsComponent;
  let fixture: ComponentFixture<TransformDotToIotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformDotToIotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformDotToIotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
