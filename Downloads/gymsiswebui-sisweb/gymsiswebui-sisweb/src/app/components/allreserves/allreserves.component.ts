import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/Services/reserve.service';
import { Reserve } from 'src/app/Models/reserve';

@Component({
  selector: 'app-allreserves',
  templateUrl: './allreserves.component.html',
  styleUrls: ['./allreserves.component.css']
})
export class AllreservesComponent implements OnInit {

  constructor(private router:Router,private reserveService:ReserveService) { }

  reservas:any;

  ngOnInit() {
    this.reserveService.getAllReserves().subscribe(data => {
      this.reservas = data;
    })
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
