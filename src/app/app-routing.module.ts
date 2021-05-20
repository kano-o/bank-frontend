import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {TransaktionComponent} from "./transaktion/transaktion.component";
import {AuszahlenComponent} from "./auszahlen/auszahlen.component";
import {EinzahlenComponent} from "./einzahlen/einzahlen.component";
import {MeinkontoComponent} from "./meinkonto/meinkonto.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'transaktion',
    component: TransaktionComponent
  },
  {
    path: 'überweisen',
    component: AuszahlenComponent
  },
  {
    path: 'einzahlen',
    component: EinzahlenComponent
  },
  {
    path: 'konto',
    component: MeinkontoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
