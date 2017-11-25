import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor( private router: Router) { }
  goToSearch() {
    this.router.navigate(['/shared/search']);

  }
  goToLogin(){
    this.router.navigate(['/login']);
  }


  ngOnInit() {
  }



}
