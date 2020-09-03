import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCompositionComponent } from './example-composition.component';

describe('ExampleCompositionComponent', () => {
  let component: ExampleCompositionComponent;
  let fixture: ComponentFixture<ExampleCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
