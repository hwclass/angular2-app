import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
  selector: 'dashboard',
  templateUrl: 'app/layout/settings/settings.component.html',
  styleUrls: ['app/layout/settings/settings.component.css']
})
export class SettingsComponent{

  constructor(private _router: Router) { }

}
