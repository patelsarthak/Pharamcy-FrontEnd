import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRefillRxComponent } from './auto-refill-rx.component';

describe('AutoRefillRxComponent', () => {
  let component: AutoRefillRxComponent;
  let fixture: ComponentFixture<AutoRefillRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoRefillRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRefillRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
