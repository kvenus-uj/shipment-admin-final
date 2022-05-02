import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { 
  CardModule, 
  GridModule, 
  BadgeModule, 
  ProgressModule,
  ButtonModule, 
  SwitchModule,
  ChartModule,
  AlertModule,
  FormModule,
  SidebarModule,
  TabsetModule
 } from '@coreui/angular';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { IconModule } from '@coreui/icons-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { DetailsComponent } from './details/details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdatecustomerComponent } from './update/validation.component';
import { InterfaceComponent } from './interface/default.component';
import { ShipmentAnalyticsComponent } from './shipment-analytics/shipment-analytics.component';
import { ProductsShipmentsComponent } from './products-shipments/products-shipments.component';
import { ShipmentsChartComponent } from './shipments-chart/shipments-chart.component';

import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [InterfaceComponent, ShipmentAnalyticsComponent, ProductsShipmentsComponent, ShipmentsChartComponent ,UpdatecustomerComponent ,AddCustomerComponent, CustomerComponent, AddParcelComponent, DetailsComponent],
  imports: [
    
    CommonModule,
    AlertModule,
    TabsetModule,
    SidebarModule,
    FormModule,
    OrdersRoutingModule,
    BadgeModule,
    SwitchModule,
    FormsModule,
    CardModule,
    GridModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxDaterangepickerMd.forRoot(),
    ChartModule,
    TabsetModule,
    BsDropdownModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http] 
  })
  ]
})
export class CustomerModule { }
