import {Component, OnInit} from '@angular/core';
import {GetProductService, UtilsService} from '../myService';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

declare let mui: any;
declare let $: any;

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss'],
  providers: [GetProductService, UtilsService]
})
export class ClassifyComponent implements OnInit {
  gets: any;
  constructor( private router: Router, private  getProductService: GetProductService, private http: HttpClient, private ElevatorSideBarNav:UtilsService) {
  }

  /*
      this.LiftEffect({
      "control1": ".lift-nav", 						  //侧栏电梯的容器
      "control2": ".lift",                           //需要遍历的电梯的父元素
      "target": [".t1",".t2",".t3",".t4",".t5",".t6"], //监听的内容，注意一定要从小到大输入
      "current": "current" 						  //选中的样式
    });
   */


  LiftEffect(json){
    var array=[];
    for(var i =0; i<json.target.length;i++){
      var t = $(json.target[i]).offset().top;
      var tl = $(json.target[i]).offset().left;
      array.push(t);
    }
    function Selected(index){
      $(json.control2).children().eq(index).addClass(json.current).siblings().removeClass(json.current);
    }
    $(window).on("scroll",Check);
    function Check(){
      let scroll = mui('.mui-scroll-wrapper').scroll();
      var wst = -scroll.y;
      if(wst >= $(json.target[0]).offset().top-103){
        // $(json.control1).fadeIn(500);
      }else{
        // $(json.control1).fadeOut(500);
      }
      var key =0;
      var flag = true;
      for(var i =0; i<array.length; i++){
        key++;
        if(flag){
          if(wst >= array[array.length-key]-206){
            var index = array.length-key;
            flag = false;
          }else{
            flag=true;
          }
        }
      }
      Selected(index);
    }
    let leftNav=mui($(json.control2));
    mui($(json.control2)[0]).on('tap','li',function(){
      console.log(leftNav);
    });
    for(var i=0;i<$(json.control2).children().length;i++){
    }
    $(json.control2).children().on("click",function(){
      $(window).off("scroll");
      var index = $(this).index();
      Selected(index);
      var flag = true;
      for(var i =0; i<array.length; i++){
        if(flag){
          if(index == i){
            $("html,body").stop().animate({
              "scrollTop": array[i]-50
            },500,function(){
              $(window).on("scroll",Check);
            });
            flag = false;
          }else{
            flag=true;
          }
        }
      }
    });
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
  goToSearch(){
    this.router.navigate(['/shared/search']);

  }

  ngOnInit() {
    console.log('hello service ' + this.getProductService.getData());
    mui.init();
    mui('.mui-scroll-wrapper').scroll({
      deceleration:0.0005
    })
    mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
    /*
    分类侧栏电梯显示效果
     */
    this.LiftEffect({
      "control1": ".lift-nav", 						  //侧栏电梯的容器
      "control2": ".lift",                           //需要遍历的电梯的父元素
      "target": [".t1",".t2",".t3",".t4",".t5",".t6"], //监听的内容，注意一定要从小到大输入
      "current": "current" 						  //选中的样式
    });
/*
分类页面搜索输入获取焦点，跳转到搜索页面
 */

    mui($('input')).on('tap','.f-goto-searchUrl',function(){
      console.log('to serach');
      // mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
      this.ElevatorSideBarNav.goToSearch();
    })

  }
  ngAfterViewInit() {




  }
}
