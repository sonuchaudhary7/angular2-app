import {RouteConfig, RouteDefinition, Route} from 'angular2/router'
import {LoginComponent} from './login.component'
import {SiteUsers} from './siteusers.component'

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'product-list', component: SiteUsers },
];