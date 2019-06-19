import { Component, OnInit } from '@angular/core';
import {ReserveService} from "../../Services/reserve.service";
import {UserService} from "../../Services/user.service";
import { Reserve } from 'src/app/Models/reserve';
import { Router } from '@angular/router';
import {FuntionService} from '../../Services/funtion.service';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {
  userReserves: any;

  constructor(private reserveService: ReserveService, private userService: UserService, private router: Router, private myfunctionService: FuntionService) { }

  ngOnInit() {
    this.reserveService.getReservesByUserId(this.userService.getCurrentUserId()).subscribe((resp) => {
      this.userReserves = resp;
      this.myfunctionService.getFunctionReserves(resp).subscribe((msg => {
        this.userReserves = msg;
      }));
    });
  }

  deleteReserve(reserveId):void{
    this.reserveService.deleteReserve(reserveId).subscribe(resp =>{
      alert("Reserva Eliminada");
      this.router.navigate(['userhome']);
    },(error) => {
      this.router.navigate(['userhome']);
    })
  }

  editReserve(reserve){
    localStorage.setItem("idReserva",reserve.reserveId.toString());
    this.router.navigate(['editreserve']);
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
