import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
  selector: 'dashboard',
  templateUrl: 'app/layout/reports/reports.component.html',
  styleUrls: ['app/layout/reports/reports.component.css']
})
export class ReportsComponent{

  constructor(private _router: Router) { }

}
