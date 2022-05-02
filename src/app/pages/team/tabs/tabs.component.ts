import { Component, OnInit } from '@angular/core';
import {  ordersData } from './orders-data';
import { pLogin } from './permission-login';
import { pSeller } from './permission-seller';
import { pTranslator } from './permission-translator';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { languages } from '../../../shared/shared.data';
import { relativeTimeThreshold } from 'moment';

@Component({
  selector: 'app-mytabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

/**
 * UI-tabs component
 */
export class MytabsComponent implements OnInit {

  allCheck:any = false;
  allCheckL:any = false;
  allCheckT:any = false;
  allCheckS:any = false;

  allCheckAttachL:any = false;
  allCheckAttachT:any = false;
  allCheckAttachS:any = false;
  allCheckAddL:any = false;
  allCheckAddT:any = false;
  allCheckAddS:any = false;
  allCheckModifyL:any = false;
  allCheckModifyT:any = false;
  allCheckModifyS:any = false;
  allCheckDeleteL:any = false;
  allCheckDeleteT:any = false;
  allCheckDeleteS:any = false;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  tableData = ordersData;
  pseller = pSeller;
  plogin = pLogin;
  ptranslator = pTranslator;

  lShow:any = true;
  tShow:any = false;
  sShow:any = false;
  showpass:any = true;
  updateShow:any = false;
  updateProfileShow:any = false;

  pshow:string = 'login';

  filterId:string = "";
  filterPronoun:string = "";
  filterName:string = "";
  filterEmail:string = "";
  filterProfile:string = "";
  filterActive:string = "";

  teamPass:string = "";
  teamNewPass:string = "";
  teamConfirmPass:string = "";

  constructor(private translate:TranslateService) {
    var lang:any = localStorage.getItem("lang");
    if(lang != null)
    {
      translate.use(lang);
    }
    else{
      translate.use(languages[0]);
    }
   }

  genPassword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 13; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.teamPass = text;
    this.teamConfirmPass = text;
    this.teamNewPass = text;
  }
  showL() {
    this.lShow = true;
    this.tShow = false;
    this.sShow = false;
  }
  showT() {
    this.lShow = false;
    this.tShow = true;
    this.sShow = false;
  }
  showS() {
    this.lShow = false;
    this.tShow = false;
    this.sShow = true;
  } 
  ngOnInit() {
  }
  passShow() {
    this.showpass = false;
  }
  passHide() {
    this.showpass = true;
  }
  updateTeam() {
    this.updateShow = true;
  }
  updateProfile() {
    this.updateProfileShow = true;
  }
  returnEmploy() {
    this.updateShow = false;
  }
  returnProfile() {
    this.updateProfileShow = false;
  }
  changeAllCheckAttach(param1:string)
  {

    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
      var checked = this.allCheckAttachL;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
      var checked = this.allCheckAttachT;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
      var checked = this.allCheckAttachS;
    }
    rowData.forEach(function(row){
      row.attach = checked;
    });
  }
  changeAllCheckAdd(param1:string)
  {

    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
      var checked = this.allCheckAddL;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
      var checked = this.allCheckAddT;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
      var checked = this.allCheckAddS;
    }
    rowData.forEach(function(row){
      row.add = checked;
    });
  }
  changeAllCheckModify(param1:string)
  {

    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
      var checked = this.allCheckModifyL;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
      var checked = this.allCheckModifyT;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
      var checked = this.allCheckModifyS;
    }
    rowData.forEach(function(row){
      row.modify = checked;
    });
  }
  changeAllCheckDelete(param1:string)
  {

    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
      var checked = this.allCheckDeleteL;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
      var checked = this.allCheckDeleteT;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
      var checked = this.allCheckDeleteS;
    }
    rowData.forEach(function(row){
      row.delete = checked;
    });
  }
  changeAllCheck2(param1:string)
  {
    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
      var checked = this.allCheckL;
      this.allCheckAddL = checked;
      this.allCheckAttachL = checked;
      this.allCheckDeleteL = checked;
      this.allCheckModifyL = checked;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
      var checked = this.allCheckT;
      this.allCheckAddT = checked;
      this.allCheckAttachT = checked;
      this.allCheckDeleteT = checked;
      this.allCheckModifyT = checked;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
      var checked = this.allCheckS;
      this.allCheckAddS = checked;
      this.allCheckAttachS = checked;
      this.allCheckDeleteS = checked;
      this.allCheckModifyS = checked;
    }
    rowData.forEach(function(row){
      row.add = checked;
      row.modify = checked;
      row.attach = checked;
      row.delete = checked;
    });
  }
  changeAllCheckColmn(param:number, param1:string,param3:any)
  {
    var checked = param3.target.checked;
    if( param1 == 'login')
    {
      var rowData = this.getPLogin;
    }
    if( param1 == 'translator')
    {
      var rowData = this.getPTranslator;
    }
    if( param1 == 'seller')
    {
      var rowData = this.getPSeller;
    }
    var i = 0;
    rowData.forEach(function(row){
      if(i == param){
        row.add = checked;
        row.modify = checked;
        row.attach = checked;
        row.delete = checked;
      }
      i++;
    });
    
  }
  changeAllCheck()
  {
    var checked = this.allCheck;
    var filteredData = this.getFilteredData;
    filteredData.forEach(function(row){
      row.checked = checked;
    });
  }
  get getFilteredData()
  {
    var filteredData = this.tableData.filter(inbound=>
      inbound.id.indexOf(this.filterId) > -1 &&
      inbound.pronoun.indexOf(this.filterPronoun) > -1 &&
      inbound.name.indexOf(this.filterName) > -1 &&
      inbound.email.toLowerCase().indexOf(this.filterEmail.toLowerCase()) > -1 &&
      inbound.profile.toLowerCase().indexOf(this.filterProfile.toLowerCase()) > -1 &&
      inbound.active.toLowerCase().indexOf(this.filterActive.toLowerCase()) > -1
    );
    return filteredData;
  }
  get getPLogin()
  {
    return this.plogin;
  }
  get getPTranslator()
  {
    return this.ptranslator;
  }
  get getPSeller()
  {
    return this.pseller;
  }
  reset()
  {
    this.filterId = "";
    this.filterPronoun = "";
    this.filterName = "";
    this.filterEmail = "";
    this.filterProfile = "";
    this.filterActive = "";
  }
}
