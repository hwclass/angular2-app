import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
  selector: 'dashboard',
  templateUrl: 'app/layout/dashboard/dashboard.component.html',
  styleUrls: ['app/layout/dashboard/dashboard.component.css']
})
export class DashboardComponent{

  constructor(private _router: Router) { }

}
