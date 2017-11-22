import { Component, OnInit } from '@angular/core';
declare let mui:any;
declare let $:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() {}
  ngOnInit() {

    mui.init();
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    });

      let scroll = mui('.mui-scroll-wrapper').scroll();
      document.querySelector('.mui-scroll' ).addEventListener('scroll', function (e ) {
        if(-scroll.y>200){
          $('.syj').show();


          mui("div").on('tap','.syj',function(){
            mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
          })
        }else{
          $('.syj').hide();
        }
        console.log($('.syj'));
      })

    let createFragment = function (count) {
      let fragment = document.createDocumentFragment();
      let li;
      for (let i = 0; i < count; i++) {
        li = document.createElement('li');
        li.className = 'mui-col-sm-6 mui-col-xs-6';
        li.innerHTML = '<div class="u-hotsale-item-container">' +
          '<img  class="u-hotsale-products-item"   data-lazyload="http://image4.suning.cn/uimg/shp/userItems/144703667463541898_1_500x500.jpg"> ' +
          '<span class="u-hotsale-item-title">人本2017新款二棉鞋女冬季保暖加绒圆头马丁鞋韩版百搭平跟小皮鞋</span>\n' +
          '<span class="u-hotsale-item-price">$0.01</span>\n' +
          '</div>';
        fragment.appendChild(li);
      }
      return fragment;
    };
    (function ($) {

      let list = mui('.m-hotsale-container')[0];
      list.appendChild(createFragment(30));
      let lazyLoad=$(document).imageLazyload({
        placeholder: '../../assets/img/vivoPhone.jpg'
      });
      lazyLoad.refresh(true);
    })(mui);
  }
  ngAfterContentInit() {
    $('.u-hotsale-item-container').css({'background':'#fff','border':'1px solid #ddd'});
    $('.u-hotsale-products-item').css('width', '100%');
    $('.u-hotsale-item-title').css({'display':'block','word-wrap':' break-word','word-break':'normal','white-space':'nowrap','overflow':'hidden','text-overflow':'ellipsis'});
    $('.u-hotsale-item-price').css({'display':'block','text-align':'left'});
  }
}
