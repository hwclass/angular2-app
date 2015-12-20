import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';


@Component({
  selector: 'app',
  templateUrl: `app/app.html`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: ['Login'] },
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
  {path: '/dashboard/...', name: 'Layout', component: LayoutComponent}
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
