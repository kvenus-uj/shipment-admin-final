import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import {languages} from '../../shared/shared.data';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  isAdmin:any = true;
  constructor(private translate:TranslateService) {
    translate.addLangs(languages);
    translate.setDefaultLang(languages[0]);
    var admin = localStorage.getItem("admin");
    if(admin == "admin"){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

  ngOnInit(): void {
    this.initCharts();
  }
  backAdmin() {
    localStorage.setItem("admin", "admin");
    location.href = '/';
  }
  initCharts(): void {
  }
}
