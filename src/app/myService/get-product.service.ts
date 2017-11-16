import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params, CanActivate} from '@angular/router';


// const CONTACT_URL = `../contacts.json`;

@Injectable()
export class GetProductService implements OnInit {
  constructor(private http: HttpClient) {
  }

  // ./app/myService/contacts.json
  getData(): any {
      this.http.get('../../assets/contacts.json').subscribe(
      data => {
        console.log(data[0].id);
        return data[0].id;
      }
    );
  }
  ngOnInit() {
  }
}
