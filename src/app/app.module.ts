import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransaktionComponent } from './transaktion/transaktion.component';
import { CardComponent } from './card/card.component';
import { EinzahlenComponent } from './einzahlen/einzahlen.component';
import { AuszahlenComponent } from './auszahlen/auszahlen.component';
import { MeinkontoComponent } from './meinkonto/meinkonto.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule, CookieService} from 'ngx-cookie';
import { Card2Component } from './card2/card2.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UeberweisenComponent } from './ueberweisen/ueberweisen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TransaktionComponent,
    CardComponent,
    EinzahlenComponent,
    AuszahlenComponent,
    MeinkontoComponent,
    Card2Component,
    UeberweisenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})
export class AppModule { }
