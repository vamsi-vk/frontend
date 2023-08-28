import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { MetrialModule } from './metrial/metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './admin/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, 
    MetrialModule, BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
