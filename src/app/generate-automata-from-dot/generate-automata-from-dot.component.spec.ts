import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAutomataFromDotComponent } from './generate-automata-from-dot.component';

describe('GenerateAutomataFromDotComponent', () => {
  let component: GenerateAutomataFromDotComponent;
  let fixture: ComponentFixture<GenerateAutomataFromDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateAutomataFromDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAutomataFromDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
