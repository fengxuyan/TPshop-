import {Component, OnInit , AfterContentInit} from '@angular/core';

declare let mui: any;

@Component({
  selector: 'app-may-like',
  templateUrl: './may-like.component.html',
  styleUrls: ['./may-like.component.scss']
})
export class MayLikeComponent implements OnInit{
  constructor() {
  }

  // http://image4.suning.cn/uimg/shp/userItems/144703667463541898_1_500x500.jpg
  // ../../../assets/img/hot-product-pic1.jpg
  ngOnInit() {
    mui.init();
    let createFragment = function (count) {
      let fragment = document.createDocumentFragment();
      let li;
      for (let i = 0; i < count; i++) {
        li = document.createElement('li');
        li.className = 'mui-table-view-cell mui-media';
        li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="http://image4.suning.cn/uimg/shp/userItems/144703667463541898_1_500x500.jpg"><div class="mui-media-body">主标题<p class="mui-ellipsis">列表二级标题</p></div></a>';
        fragment.appendChild(li);
      }
      return fragment;
    };
    (function ($) {
      let list = document.getElementById('list');
      console.log(list);
      list.appendChild(createFragment(90));
      $(document).imageLazyload({
        placeholder: '../../../assets/img/product1.jpeg'
      });
    })(mui);
    console.log('hallo lazyload');
  }



}
