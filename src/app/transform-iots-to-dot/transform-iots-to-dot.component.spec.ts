import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformIotsToDotComponent } from './transform-iots-to-dot.component';

describe('TransformIotsToDotComponent', () => {
  let component: TransformIotsToDotComponent;
  let fixture: ComponentFixture<TransformIotsToDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformIotsToDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformIotsToDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
