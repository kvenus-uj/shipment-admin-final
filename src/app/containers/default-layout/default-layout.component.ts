import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { INavData, SidebarComponent, SidebarNavComponent } from '@coreui/angular';

import {TranslateService} from 'ng2-translate/ng2-translate'
import { languages } from '../../shared/shared.data';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent  implements OnInit {
  @ViewChild(SidebarNavComponent, { static: false }) childC: SidebarNavComponent;
  @HostBinding('class.c-app') cAppClass = true;

  public navItems:INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  isAdmin:any = true;

  constructor(private translate:TranslateService) {

    var lang:any = localStorage.getItem("lang");
    if(lang != null)
    {
      this.translate.use(lang) ;
    }
    else{
      this.translate.use(languages[0]);
    }
    var admin:any = localStorage.getItem('admin');
    if(admin == 'admin')
    {
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
    
  }
  ngOnInit()
  {
    var navNames:string[] = [];
    for(var i=0;i<navItems.length;i++)
    {
      if((this.isAdmin == false) && (navItems[i].name == 'Customer' || navItems[i].name == 'Team'))
      {
        continue;
      }
      navNames.push(navItems[i].name);
      this.navItems.push(navItems[i]);
    }
    
    this.translate.get(navNames).subscribe(res => {
      for(var i=0;i<navNames.length;i++)
      {
        this.navItems[i].name = res[navNames[i]];
      }
    });
  }
}
