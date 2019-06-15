import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {MyFunction} from '../../Models/function';
import {FuntionService} from '../../Services/funtion.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  myFunctions: MyFunction[];

  constructor(private userService: UserService, private router: Router, private myfunctionService: FuntionService) { }

  ngOnInit() {
    
    if (this.userService.getToken() === null || this.userService.getToken() === '') {
      this.router.navigate(['']);
    } else {
      this.myfunctionService.getFunctions().subscribe((resp) => {
        console.log(resp);
        this.myFunctions = resp;
      });
    }
  }

  reserve(myFunction:MyFunction):void{
    localStorage.setItem("functionId",myFunction.functionId.toString());
    this.router.navigate(['newReserve']);
  }

  salas(myFunction:MyFunction):void{
    this.router.navigate(['here-map']);
  }

  logOut() {
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }

  isCollapse = false;   // guardamos el valor
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }
}
