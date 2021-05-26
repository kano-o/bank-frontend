import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  loginCheckTransaktion() {
    if (this.loginCheck()) {
      window.location.href = '/transaktion';
    }
  }

  loginCheckMeinKonto() {
    if (this.loginCheck()) {
      window.location.href = '/konto';
    }
  }


  loginCheck() {
    if (this.cookieService.get('token') == undefined && window.location.pathname !== '/login') {
      window.location.href = '/login';
    } else {
      return true;
    }
  }

  ngOnInit(): void {

  }

}
