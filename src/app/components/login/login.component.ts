import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {LoginUser, NewUser} from '../../Models/newUser';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myuser = new LoginUser();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signin() {
    console.log('-------------------------');
    console.log(this.myuser);

    this.userService.signin(this.myuser).subscribe((resp) => {
      console.log(resp)
      sessionStorage.setItem('token', resp['token']);
      this.router.navigate(["userhome"]);
    });


  }

}
