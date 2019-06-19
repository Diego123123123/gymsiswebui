import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/Services/reserve.service';
import { Reserve } from 'src/app/Models/reserve';
import {FuntionService} from '../../Services/funtion.service';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-allreserves',
  templateUrl: './allreserves.component.html',
  styleUrls: ['./allreserves.component.css']
})
export class AllreservesComponent implements OnInit {

  constructor(private router: Router, private reserveService: ReserveService, private myfunctionService: FuntionService, private userService: UserService) { }

  reservas: any;

  ngOnInit() {
    this.reserveService.getReserves().subscribe(data => {
      this.reservas = data;
      this.myfunctionService.getFunctionReserves(data).subscribe((msg => {
        this.reservas = msg;
        this.userService.parsereserves(msg).subscribe((mg) => {
          this.reservas = mg;
        });
      }));
    }, (error) => {
      console.log(this.reservas);
    });
  }

  deleteReserve(reserveId):void{
    this.reserveService.deleteReserve(reserveId).subscribe(resp =>{
      alert("Reserva Eliminada");
      this.router.navigate(['adminhome']);
    })
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
