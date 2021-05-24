import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-meinkonto',
  templateUrl: './meinkonto.component.html',
  styleUrls: ['./meinkonto.component.css']
})
export class MeinkontoComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
display: any;

  get(){
    this.display = "test";

    let header = new HttpHeaders();
    header = header.append("Token","TGoRqMP2MxAEKaNl6rA5JX76AxP-HcG8hvmNDCdKasM=");
    this.http.get("https://backend.yab-banking.tech/account/profile",{headers:header}).subscribe(
      response => {
        console.log(response);
        this.display = response;
        // this.display = this.display.toString();
      }
    );
  }
  ngOnInit(): void {
this.display = "leer";
  }

}
