import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
  selector: 'dashboard',
  templateUrl: 'app/layout/blankPage/blankpage.component.html',
  styleUrls: ['app/layout/blankPage/blankpage.component.css']
})
export class BlankpageComponent{

  constructor(private _router: Router) { }

}
