import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'login-page',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']
})
export class LoginComponent{
  constructor(private _router: Router) { }
  validationLogin(){
    this.errorMessage = false;
    if(this.email && this.email==='test@example.com' && this.password && this.password==='test'){
      this._router.navigate(['Layout']);
    }else{
      this.errorMessage = 'Use email:test@example.com password:test';
    }
  };
}
