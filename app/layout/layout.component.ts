import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'layout',
  templateUrl: 'app/layout/layout.component.html',
  styleUrls: ['app/layout/layout.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/profile', name: 'Profile', component: ProfileComponent}
])
export class LayoutComponent implements OnInit {
  constructor(private _router: Router) { }
  ngOnInit() {

  }
  goTo(key) {
    this._router.navigate([key]);
  }
  logout() {
    this._router.navigate(['Login']);
  }
}
