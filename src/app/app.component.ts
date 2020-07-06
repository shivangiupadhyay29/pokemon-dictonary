import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';
import { Labels } from '../consants';

import { navigation } from '../consants/index.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public router: Router, public service: UsersService) {
    this.init();
  }

  title = 'pokemon-dictonary';
  buttonTitle: string;
  labelTitle: string;
  navOptions: object[];

  init(): void {
    this.buttonTitle  = this.service.isAdmin ? Labels.UserLoginButton : Labels.AdminLoginButton;
    this.labelTitle = this.service.isAdmin ? Labels.AdminLoginLabel : Labels.UserLoginLabel;
    this.navOptions = navigation( this.service.isAdmin);
  }

  login(): void {
    this.service.loginUser().subscribe(data => {
       this.init();
    });
  }

}
