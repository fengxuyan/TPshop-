import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { IndexComponent } from './index/index.component';

import { SearchComponent } from './shared/search/search.component';
import { ClassifyComponent } from './classify/classify.component';
import { CartComponent } from './cart/cart.component';

import { SettingsComponent } from './settings/settings.component';
import { PersonalComponent } from './personal/personal.component';
import { AccountComponent } from './personal/account/account.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }, {
    path: 'index',
    component: IndexComponent
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path:"login",component:LoginComponent,
    children:[
      {path:"register",component:RegisterComponent},
      {path:"forgetPwd",component:ForgetPwdComponent}
    ]
  },
  {
    path: 'shared/search',
    component: SearchComponent
  },
  {
    path: 'classify',
    component: ClassifyComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
  , {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'personal/:item',
    component: AccountComponent
  },
  // {
  //   path: 'forgetPwd',
  //   component: ForgetPwdComponent
  // }



];
