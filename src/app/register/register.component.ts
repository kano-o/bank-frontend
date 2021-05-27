import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  packet = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: ""
  };

  postReg(firstName: string, lastName: string, emailAddress: string, phoneNumber: string, password: string) {
    this.packet.firstName = firstName;
    this.packet.lastName = lastName;
    this.packet.emailAddress = emailAddress;
    this.packet.phoneNumber = phoneNumber;
    this.packet.password = password;
    let header = new HttpHeaders().set("Content-type", "application/json");
    this.http.post("https://backend.yab-banking.tech/account/register", this.packet, {
      headers: header,
      responseType: "text"
    }).subscribe(
      (response) => {
        console.log(response);
       // window.location.href = ""
      }
    );
  }

  ngOnInit(): void {

  }

}
