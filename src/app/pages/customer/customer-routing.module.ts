import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';

import { DetailsComponent } from './details/details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdatecustomerComponent } from './update/validation.component';
import { InterfaceComponent } from './interface/default.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'sendorders', component: AddParcelComponent },
  { path: 'showdetails', component: DetailsComponent },
  { path: 'updatecustomer', component: UpdatecustomerComponent },
  { path: 'interface', component: InterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
