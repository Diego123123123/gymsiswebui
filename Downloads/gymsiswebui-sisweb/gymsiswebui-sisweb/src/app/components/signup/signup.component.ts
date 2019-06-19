import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/Models/newUser';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = new NewUser();
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  signUp() {
    console.log(this.user)
    this.userService.signUp({
      "email": this.user.email,
      "lastName": this.user.lastName,
      "name": this.user.name,
      "password": this.user.password
    }).subscribe((resp) => {
      console.log(resp)
      sessionStorage.setItem('token', resp['userId']);
      this.router.navigate(["userhome"]);
    });
  }

  redirectLogIn() {
    this.router.navigate([""]);
  }


}
