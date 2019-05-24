import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.getToken() === null || this.userService.getToken() === '') {
      this.router.navigate(['']);
    }
  }

  logOut(){
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }
}
