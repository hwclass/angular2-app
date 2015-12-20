import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'profile',
  templateUrl: 'app/layout/profile/profile.component.html',
  styleUrls: ['app/layout/profile/profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private _router: Router) { }
}
