import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {FuntionService} from '../../Services/funtion.service';
import {MyFunction} from '../../Models/function';
import {ReserveService} from '../../Services/reserve.service';

@Component({
  selector: 'app-new-reserve',
  templateUrl: './new-reserve.component.html',
  styleUrls: ['./new-reserve.component.css']
})
export class NewReserveComponent implements OnInit {

  myfunction: any;
  amountOfPeople: number;
  constructor(private userService: UserService, private router: Router, private myfunctionService: FuntionService, private reserveService: ReserveService) { }

  ngOnInit() {
    this.myfunctionService.getFunctionById().subscribe((response) => {
      this.myfunction = response;
    });
  }

  Reservar() {
    this.reserveService.addReserve({
      user: this.userService.getCurrentUserId(),
      amountOfPeople: this.amountOfPeople,
      functionId: localStorage.getItem('functionId')
    }).subscribe((resp) => {
      this.router.navigate(['userhome']);
    }, (error) => {
      this.router.navigate(['userhome']);
    });
  }

  Cancelar(){
    localStorage.removeItem("functionId");
    this.router.navigate(['userhome']);
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
