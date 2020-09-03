import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNoSubscriptionsComponent } from './example-no-subscriptions.component';

describe('ExampleNoSubscriptionsComponent', () => {
  let component: ExampleNoSubscriptionsComponent;
  let fixture: ComponentFixture<ExampleNoSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNoSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNoSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
