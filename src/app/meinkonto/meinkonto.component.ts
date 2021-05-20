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

  function (){
    this.display = "test";
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(
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
