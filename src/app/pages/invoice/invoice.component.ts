import { Component, OnInit} from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { languages } from '../../shared/shared.data';
import {  invoiceData } from './invoice-data';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  tableData = invoiceData;
  currentPage = 1;
  page: number = 10;

  filterNumber: string = "";
  filterPeriod: string = "";
  filterCustomer: string = "";
  isAdmin:any = true;
  constructor(private translate:TranslateService) {
    var lang:any = localStorage.getItem("lang");
    if(lang != null)
    {
      translate.use(lang);
    }
    else{
      translate.use(languages[0]);
    }
    var admin = localStorage.getItem("admin");
    if(admin == "admin"){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
   }
   backAdmin() {
    localStorage.setItem("admin", "admin");
    location.href = '/';
  }
  customerPage()
  {
    localStorage.setItem('admin', "customer");
    location.href = '/';
  }
  ngOnInit(): void {
  }

  pageChanged(event: PageChangedEvent): void {
  }
  get getFilteredPageData()
  {
    var filteredData = this.tableData.filter(inbound =>
      inbound.number.toLowerCase().indexOf(this.filterNumber.toLowerCase()) > -1 &&
      inbound.customer.toLowerCase().indexOf(this.filterCustomer.toLowerCase()) > -1 &&
      inbound.period.toLowerCase().indexOf(this.filterPeriod.toLowerCase()) > -1
    );  
    const startItem = (this.currentPage - 1) * this.page;
    const endItem = this.currentPage * this.page;
    return filteredData.slice(startItem, endItem);
  }
  
  get getFilteredData()
  {
    return this.tableData.filter(inbound =>
      inbound.number.toLowerCase().indexOf(this.filterNumber.toLowerCase()) > -1 &&
      inbound.customer.toLowerCase().indexOf(this.filterCustomer.toLowerCase()) > -1 &&
      inbound.period.toLowerCase().indexOf(this.filterPeriod.toLowerCase()) > -1
    );
  }
  reset() {
    this.filterNumber = "";
    this.filterPeriod = "";
    this.filterCustomer = "";
  }
}
