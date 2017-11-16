import {Component, OnInit, AfterContentInit} from '@angular/core';

declare let mui: any;
declare let $: any;

@Component({
  selector: 'app-may-like',
  templateUrl: './may-like.component.html',
  styleUrls: ['./may-like.component.scss', '../../../assets/css/mui.min.css']
})
export class MayLikeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    mui.init();
    let createFragment = function (count) {
      let fragment = document.createDocumentFragment();
      let li;
      for (let i = 0; i < count; i++) {
        li = document.createElement('div');
        li.className = 'mui-col-sm-6 mui-col-xs-6 like-list';
        li.innerHTML = '<a class="">' +
          '<img  class="img-size"   data-lazyload="http://image4.suning.cn/uimg/shp/userItems/144703667463541898_1_500x500.jpg"> ' +
          '<span class="product-title">haier海尔 bc-873mpf 93..</span>\n' +
          '<span class="product-price">$0.01</span>\n' +
          '<span class="product-similer">看相似</span>' +
          '</a>';
        fragment.appendChild(li);
      }
      return fragment;
    };

    (function ($) {
      let list = document.getElementById("list");
      list.appendChild(createFragment(150));
      $(document).imageLazyload({
        placeholder: '../../assets/img/cart.png'
      });
    })(mui);

  }
  ngAfterContentInit() {

    $('.img-size').css('width', '100%');
    $('.product-title').css('display', 'block').css('color', '#000');
    $('.product-price').css('display', 'inline-block').css('color', '#9f0000');
    $('.product-similer').css('display', 'inline-block').css('color', '#686868').css('float', 'right').css('border', '1px solid #bfbfbf').css('background', '#fff');

  }


}
