import { MetrialModule } from './../metrial/metrial.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
NavComponent,
SidenavComponent
  ],
  imports: [
    CommonModule,
    MetrialModule],
exports :[NavComponent,
  SidenavComponent

  
]
 
})
export class AdminModule { }
