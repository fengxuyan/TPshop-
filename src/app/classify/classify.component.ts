import {Component, OnInit} from '@angular/core';
import {GetProductService} from '../myService';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ViewChild, ElementRef} from '@angular/core';
// import {ChangeClassService} from '../myServices';
declare let mui: any;
declare let $: any;

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss'],
  providers: [GetProductService]
})
export class ClassifyComponent implements OnInit {
  myJson: any;
  gets: any;
  constructor(private  getProductService: GetProductService, private http: HttpClient) {
  }

  getData() {
    this.http.get('../../assets/contacts.json').subscribe(
      data => {
        this.gets = data;
        // console.log(this.gets);
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  ngOnInit() {
    console.log('hello service ' + this.getProductService.getData());
  }
  scrollPage(name,height) {
    $('.' + name).on('click', function () {
      scrollTo(0, height)
    });
  }

  ngAfterViewInit() {}
}
