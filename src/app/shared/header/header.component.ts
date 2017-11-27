import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../myService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[UtilsService]
})
export class HeaderComponent implements OnInit {
   title:string;
  constructor(private utilsService:UtilsService) {
    if((this.utilsService.isContains(location.href,'search'))){
      this.title = '搜索';
    }
    else if((this.utilsService.isContains(location.href,'personal'))){
      this.title = '个人中心';
    }
    else if((this.utilsService.isContains(location.href,'cart'))){
      this.title = '购物车';
    }
    else if((this.utilsService.isContains(location.href,'forgetPwd'))){
      this.title = '忘记密码';
    }
    else if((this.utilsService.isContains(location.href,'register'))){
      this.title = '注册';
    }
    else if((this.utilsService.isContains(location.href,'login'))){
      this.title = '登录';
    }

  }

  ngOnInit() {
  }

}
