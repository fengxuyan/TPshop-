import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  goodsName: any;

  ngOnInit() {
    console.log($('.m-hotSearch-lists'));
    $.ajax({
      url: '../../../assets/goods.json',
      type: 'GET', //GET POST
      async: false,    //或false,是否异步
      timeout: 5000,    //超时时间
      dataType: 'json',    //返回的数据格式：json/xml/html/script/jsonp/text
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
        this.goodsName = data[0].goods;
        $.each(this.goodsName, function (index, item) {
          $('.m-hotSearch-lists').append('<li class="mui-col-sm-4 mui-col-xs-4 m-hotSearch-item"><span>' + item + '</span></li>')
        })
        $('.m-hotSearch-item').css({
          "display": "inline-block",
          "float": "left",
          "padding": "0.5rem 0",
          "margin-left": "0.4rem",
          "margin-bottom": "0.5rem",
          "border": "1px solid #ddd",
          "width": "31%"
        });
      },
      error: function (xhr, textStatus) {
      },
      complete: function () {
      }
    });
  }
}
