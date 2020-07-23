import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefillRxComponent } from './refill-rx/refill-rx.component';
import { AutoRefillRxComponent } from './auto-refill-rx/auto-refill-rx.component';
import { TransferRxComponent } from './transfer-rx/transfer-rx.component';


const routes: Routes = [
  {
  path: 'refill-rx',
  component: RefillRxComponent
},
{
  path: 'autofill-rx',
  component: AutoRefillRxComponent
},
{
  path: 'transfer-rx',
  component: TransferRxComponent
},
{
  path: '',
  component: TransferRxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
