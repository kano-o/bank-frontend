import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-auszahlen',
  templateUrl: './auszahlen.component.html',
  styleUrls: ['./auszahlen.component.css']
})
export class AuszahlenComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  packet = {
    withdrawal: 0
  };

  auszahlen(betrag: string) {
    this.packet.withdrawal = parseInt(betrag);
    let header = new HttpHeaders().set("Content-type", "application/json");
    header = header.append("Token",this.cookieService.get("token"));
    this.http.post("https://backend.yab-banking.tech/balance/withdrawal", this.packet, {
      headers: header,
    }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  ngOnInit(): void {
  }

}
