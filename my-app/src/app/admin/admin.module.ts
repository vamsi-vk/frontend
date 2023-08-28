import { MetrialModule } from './../metrial/metrial.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin.component';
import { TablesComponent } from './tables/tables.component';
import { MasterService } from '../services/master.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
@NgModule({
  declarations: [
NavComponent,
SidenavComponent,
AdminComponent,
TablesComponent,
UserdetailsComponent

  ],
  imports: [
    CommonModule,
    MetrialModule
  ],


exports :[NavComponent,
  SidenavComponent,
  AdminComponent
  
]
 
})
export class AdminModule { }
