import { MetrialModule } from './../metrial/metrial.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin.component';
@NgModule({
  declarations: [
NavComponent,
SidenavComponent,
AdminComponent

  ],
  imports: [
    CommonModule,
    MetrialModule],
exports :[NavComponent,
  SidenavComponent,
  AdminComponent
  
]
 
})
export class AdminModule { }
