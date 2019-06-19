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
    this.userService.signin({
      'email': this.myuser.email,
      'password': this.myuser.password
    }).subscribe((resp) => {
      console.log(resp)
      sessionStorage.setItem('token', resp['userId']);
      if (this.userService.getCurrentUserId() === '9506867c-2079-4de3-b6b4-61be68ad738f') {
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
