import { Component, OnInit } from '@angular/core';

declare let mui:any;
declare let $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  	mui.init();
  }

}
