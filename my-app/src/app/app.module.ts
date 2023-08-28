import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { MetrialModule } from './metrial/metrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MetrialModule,
    BrowserAnimationsModule,
    AdminModule,

    LoginModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
