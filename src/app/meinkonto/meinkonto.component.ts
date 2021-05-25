import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-meinkonto',
  templateUrl: './meinkonto.component.html',
  styleUrls: ['./meinkonto.component.css']
})
export class MeinkontoComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  display: any;

  get() {
    this.display = "test";

    let header = new HttpHeaders();
    header = header.append("Token", this.cookieService.get("token"));
    this.http.get("https://backend.yab-banking.tech/account/profile", {headers: header}).subscribe(
      response => {
        console.log(response);
        this.display = response;
      }
    );
  }

  ngOnInit(): void {
    this.display = "leer";
    this.get();
  }

}
