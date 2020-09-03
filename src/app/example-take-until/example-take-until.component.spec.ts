import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTakeUntilComponent } from './example-take-until.component';

describe('ExampleTakeUntilComponent', () => {
  let component: ExampleTakeUntilComponent;
  let fixture: ComponentFixture<ExampleTakeUntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTakeUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
