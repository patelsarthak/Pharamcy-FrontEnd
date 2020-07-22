import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRxComponent } from './transfer-rx.component';

describe('TransferRxComponent', () => {
  let component: TransferRxComponent;
  let fixture: ComponentFixture<TransferRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
