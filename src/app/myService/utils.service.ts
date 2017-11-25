import { Injectable } from '@angular/core';
import {Router, ActivatedRoute, Params , CanActivate} from '@angular/router';
declare let $:any;

@Injectable()

export class UtilsService {

  constructor(private router:Router, private activatedRoute:ActivatedRoute ) { }

  goToSearch() {
    console.log('123');
    this.router.navigate(['/shared/search']);
  }
  getParams(): void {
    // 获取路由参数
    // http://localhost:4201/post?id=12&name=zhangsan
    // this.activatedRoute.params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // let userId = params['userId'];
      console.log(params);
    });
  }
  isContains(str, substr): any {
    return str.indexOf(substr) >= 0;
  }



  LiftEffect(json){

    var array=[];

    for(var i =0; i<json.target.length;i++){
      var t = $(json.target[i]).offset().top;
      array.push(t);

    }

    function Selected(index){
      $(json.control2).children().eq(index).addClass(json.current).siblings().removeClass(json.current);
    }


    $(window).on("scroll",Check);

    function Check(){

      var wst = $(window).scrollTop();


      if(wst >= $(json.target[0]).offset().top-100){
        $(json.control1).fadeIn(500);
      }else{
        $(json.control1).fadeOut(500);
      }

      var key =0;
      var flag = true;
      for(var i =0; i<array.length; i++){
        key++;
        if(flag){

          if(wst >= array[array.length-key]-300){
            var index = array.length-key;
            flag = false;
          }else{
            flag=true;
          }

        }
      }
      Selected(index);
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


}
