import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytabsComponent } from './tabs/tabs.component';

const routes: Routes = [
    
    {
        path: '',
        component: MytabsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
