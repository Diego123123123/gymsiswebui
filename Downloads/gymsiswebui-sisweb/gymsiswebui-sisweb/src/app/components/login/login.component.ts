import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {LoginUser, NewUser} from '../../Models/newUser';

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

    this.userService.signin({
      'email': this.myuser.email,
      'password': this.myuser.password
    }).subscribe((resp) => {
      console.log(resp)
      sessionStorage.setItem('token', resp['token']);
      if (this.userService.getCurrentUserId() === 'ea9a9ecc-dd20-48f8-887b-23b9c44df472') {
        this.router.navigate(["adminhome"]);
      }else{
        this.router.navigate(["userhome"]);
      }
    });

    
  }

  redirectSignUp() {
    this.router.navigate(['signup']);
  }
}
