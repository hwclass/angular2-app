import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {NgClass} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportsComponent} from './reports/reports.component';
import {BlankpageComponent} from './blankPage/blankpage.component';
import {SettingsComponent} from './settings/settings.component';

@Component({
  selector: 'layout',
  templateUrl: 'app/layout/layout.component.html',
  styleUrls: ['app/layout/layout.component.css'],
  directives: [ROUTER_DIRECTIVES,NgClass]
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/profile', name: 'Profile', component: ProfileComponent},
  {path: '/settings', name: 'Settings', component: SettingsComponent},
  {path: '/reports', name: 'Reports', component: ReportsComponent},
  {path: '/blank', name: 'Blank', component: BlankpageComponent}
])
export class LayoutComponent implements OnInit {
  constructor(private _router: Router) { }
  ngOnInit() {
    this.active = {};
  }
  goTo(key) {
    this.active = {};
    this.active[key] = true;
    this._router.navigate([key]);
  }
  logout() {
    this._router.navigate(['Login']);
  }
}
