import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { RxFormComponent } from './rx-form/rx-form.component';
import { RefillRxComponent } from './refill-rx/refill-rx.component';
import { AutoRefillRxComponent } from './auto-refill-rx/auto-refill-rx.component';
import { TransferRxComponent } from './transfer-rx/transfer-rx.component';


@NgModule({
  declarations: [RxFormComponent, RefillRxComponent, AutoRefillRxComponent, TransferRxComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
