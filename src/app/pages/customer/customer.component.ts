import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { languages } from '../../shared/shared.data';
import {  customerData } from './customer-data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild("asideToggle", {static: false}) asideToggle: ElementRef;
  @ViewChild("fileupload", {static: false}) fileUpload: ElementRef;
  file:File = null;
  fileName:any = "";

  tableData = customerData;
  currentPage = 1;
  page: number = 10;

  asideShow:any = false;

  allCheck:any = false;
  
  filterId:string = "";
  filterCompany:string = "";
  filterSiret:string = "";
  filterVatnumber:string = "";
  filterEmail:string = "";
  filterActive:any = "";
  filterNewsletter: any = "";
  filterCountry: string = "";
  filterInscription: any = "";
  filterDateoflastvist: any = "";
  ordersDate:any = "12-09-2020";

  currentOrders:any = null;

constructor(private translate:TranslateService,private route: ActivatedRoute,private router: Router) {
    var lang:any = localStorage.getItem("lang");
    if(lang != null)
    {
      translate.use(lang);
    }
    else{
      translate.use(languages[0]);
    }
   }

  ngOnInit(): void {
  }
  customerPage()
  {
    localStorage.setItem('admin', "customer");
    location.href = "/";
  }
  changeAllCheck()
  {
    var checked = this.allCheck;
    var filteredData = this.getFilteredData;
    filteredData.forEach(function(row){
      row.checked = checked;
    });
  }
  pageChanged(event: PageChangedEvent): void {
  }
  get getFilteredPageData()
  {
    var filteredData = this.tableData.filter(inbound=>
      inbound.id.indexOf(this.filterId) > -1 &&
      inbound.company.indexOf(this.filterCompany) > -1 &&
      inbound.siret.indexOf(this.filterSiret) > -1 &&
      inbound.vat_number.toLowerCase().indexOf(this.filterVatnumber.toLowerCase()) > -1 &&
      inbound.email_address.toLowerCase().indexOf(this.filterEmail.toLowerCase()) > -1 &&
      ((inbound.active == (this.filterActive == 'True')) || (this.filterActive == '')) &&
      ((inbound.newsletter == (this.filterNewsletter == 'True')) || (this.filterNewsletter == '')) &&
      inbound.country.toLowerCase().indexOf(this.filterCountry.toLowerCase()) > -1 &&
      inbound.email_address.toLowerCase().indexOf(this.filterEmail.toLowerCase()) > -1 &&
      (this.filterInscription != '' ?
        (Date.parse(inbound.inscription) >= this.filterInscription[0]
          && Date.parse(inbound.inscription) <= this.filterInscription[1]) : true) &&
      (this.filterDateoflastvist != '' ?
      (Date.parse(inbound.dateoflastvist) >= this.filterDateoflastvist[0]
        && Date.parse(inbound.dateoflastvist) <= this.filterDateoflastvist[1]) : true)          
    );
    const startItem = (this.currentPage - 1) * this.page;
    const endItem = this.currentPage * this.page;
    return filteredData.slice(startItem, endItem);
  }
  get getFilteredData()
  {
    var filteredData = this.tableData.filter(inbound=>
      inbound.id.indexOf(this.filterId) > -1 &&
      inbound.company.indexOf(this.filterCompany) > -1 &&
      inbound.siret.indexOf(this.filterSiret) > -1 &&
      inbound.vat_number.toLowerCase().indexOf(this.filterVatnumber.toLowerCase()) > -1 &&
      inbound.email_address.toLowerCase().indexOf(this.filterEmail.toLowerCase()) > -1 &&
      ((inbound.active == (this.filterActive == 'True')) || (this.filterActive == '')) &&
      ((inbound.newsletter == (this.filterNewsletter == 'True')) || (this.filterNewsletter == '')) &&
      inbound.country.toLowerCase().indexOf(this.filterCountry.toLowerCase()) > -1 &&
      inbound.email_address.toLowerCase().indexOf(this.filterEmail.toLowerCase()) > -1 &&
      (this.filterInscription != '' ?
        (Date.parse(inbound.inscription) >= this.filterInscription[0]
          && Date.parse(inbound.inscription) <= this.filterInscription[1]) : true) &&
      (this.filterDateoflastvist != '' ?
      (Date.parse(inbound.dateoflastvist) >= this.filterDateoflastvist[0]
        && Date.parse(inbound.dateoflastvist) <= this.filterDateoflastvist[1]) : true)          
    );
    return filteredData;
  }
  search()
  {

  }
  reset()
  {
    this.filterId = "";
    this.filterCompany = "";
    this.filterSiret = "";
    this.filterVatnumber = "";
    this.filterEmail = "";
    this.filterActive = "";
    this.filterNewsletter = "";
    this.filterCountry = "";
    this.filterInscription = "";
    this.filterDateoflastvist = "";
  }
  export()
  {
  }
  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  showMoreDetails(orders:any)
  {
    this.currentOrders = orders;
    this.toggleAside();
  }
  confirmEdit()
  {
    this.toggleAside();
  }
  toggleAside()
  {
    this.asideShow =  !this.asideShow;
    this.asideToggle.nativeElement.click();
  }
  getBadge(status) {
    switch (status) {
      case 'Delivered':
      case 'In delivering':
        return 'success';
      case 'Created':
        return 'secondary';
      case 'in fulfillment':
      case 'In transit':
        return 'info';
      case 'Exception':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
  public handleFileInput(files:any)
  {
    this.file= files[0];   
    this.fileName = this.file.name;  
  }
}
