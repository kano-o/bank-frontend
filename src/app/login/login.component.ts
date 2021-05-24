import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }


  packet = {
    emailAddress: "",
    password: ""
  };

  post(emailAddress: string, password: string) {
    this.packet.emailAddress = emailAddress;
    this.packet.password = password;
    let header = new HttpHeaders().set("Content-type", "application/json");
    this.http.post("https://backend.yab-banking.tech/security/token", this.packet, {
      headers: header,
      responseType: "text"
    }).subscribe(
      (response) => {
        console.log(response);
        this.cookieService.put("token", response);
      }
    );
  }

  ngOnInit(): void {
  }

}
