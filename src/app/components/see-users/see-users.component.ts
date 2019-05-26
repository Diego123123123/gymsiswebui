import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { NewUser, User } from 'src/app/Models/newUser';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css']
})
export class SeeUsersComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  users:any;

  ngOnInit() {
    this.userService.getUsers().subscribe( resp => {
      this.users=resp;
    })
  }

  logOut() {
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }
}
