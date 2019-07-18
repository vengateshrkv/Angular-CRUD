import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';

import { MobileService } from './mobile.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilesComponent,
    UpdateMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
