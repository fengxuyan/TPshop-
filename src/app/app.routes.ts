import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { IndexComponent } from './index/index.component';

import { SearchComponent } from './shared/search/search.component';
import { ClassifyComponent } from './classify/classify.component';
import { CartComponent } from './cart/cart.component';

import { SettingsComponent } from './settings/settings.component';
import { PersonalComponent } from './personal/personal.component';

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
  }, {
    path: 'register',
    component: RegisterComponent
  }
  , {
    path: 'shared/search',
    component: SearchComponent
  }
  , {
    path: 'classify',
    component: ClassifyComponent
  }
  , {
    path: 'cart',
    component: CartComponent
  }
  , {
    path: 'settings',
    component: SettingsComponent
  }
  , {
    path: 'personal',
    component: PersonalComponent
  }

];
