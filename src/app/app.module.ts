import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// 路由
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {HttpClientModule } from '@angular/common/http';

import {HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './shared/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { HotProductComponent } from './product/hot-product/hot-product.component';
import { MayLikeComponent } from './product/may-like/may-like.component';
import { ClassifyComponent } from './classify/classify.component';
import {GetProductService} from './myService';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonalComponent } from './personal/personal.component';
import { AccountComponent } from './personal/account/account.component';
import { ForgetPwdComponent } from './login/forget-pwd/forget-pwd.component';
import { HeaderComponent } from './shared/header/header.component';
import { LockComponent } from './personal/account/lock/lock.component';
import { FeedbackComponent } from './personal/feedback/feedback.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    SearchComponent,
    FooterComponent,
    NewProductComponent,
    HotProductComponent,
    MayLikeComponent,
    ClassifyComponent,
    CartComponent,
    SettingsComponent,
    PersonalComponent,
    AccountComponent,
    ForgetPwdComponent,
    HeaderComponent,
    LockComponent,
    FeedbackComponent,
    LoginContainerComponent,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [GetProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
