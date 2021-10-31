import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
   

import {CalendarModule} from 'primeng/calendar';//g1 caledar and time

import {DropdownModule} from 'primeng/dropdown';//g2 dropdown

import {ButtonModule} from 'primeng/button';//g3 button

import {FileUploadModule} from 'primeng/fileupload';//g4 uploand
import {HttpClientModule} from '@angular/common/http';//g4










@NgModule({
  declarations: [
    AppComponent,
    SimplePageComponent,
    PaymentComponent,
    LoginComponent,
    CancelbookingComponent,
    BookingComponent,
    SearchComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

