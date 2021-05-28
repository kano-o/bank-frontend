import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-einzahlen',
  templateUrl: './einzahlen.component.html',
  styleUrls: ['./einzahlen.component.css']
})
export class EinzahlenComponent implements OnInit {


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  packet = {
    deposit: 0
  };

  display: any;

  einzahlen(betrag: string) {
    this.packet.deposit = parseInt(betrag);
    let header = new HttpHeaders().set("Content-type", "application/json");
    header = header.append("Token",this.cookieService.get("token"));
    this.http.post("https://backend.yab-banking.tech/balance/deposit", this.packet, {
      headers: header,
    }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  ngOnInit(): void {
    console.log(window.location.pathname);
    if (this.cookieService.get("token") == undefined && window.location.pathname !== "/login") { //potential fix
      window.location.href = "/login";

    }
    this.display = "leer";
  }

}
