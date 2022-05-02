import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { 
  CardModule, 
  NavModule,
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

import { TablesRoutingModule } from './team-routing.module';
import { AdvancedSortableDirective } from './default/advanced-sortable.directive';
import { MytabsComponent } from './tabs/tabs.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader,TranslateService, TranslateModule, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { IconModule } from '@coreui/icons-angular';
import { Http } from '@angular/http';
@NgModule({
  declarations: [MytabsComponent, AdvancedSortableDirective],
  imports: [
    CommonModule,
    CardModule,
    TabsetModule,
    NavModule,
    GridModule,
    ButtonModule,
    ButtonsModule,
    FormModule,
    TablesRoutingModule,
    PaginationModule.forRoot(),
    NgbCollapseModule,
    FormsModule,
    IconModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http] 
  })
  ],
  providers: [
    TranslateService
  ]
})
export class TeamModule { }
