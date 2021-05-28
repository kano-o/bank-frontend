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
import { UeberweisenComponent } from './ueberweisen/ueberweisen.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule, CookieService} from 'ngx-cookie';


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
    UeberweisenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],

})
export class AppModule { }
