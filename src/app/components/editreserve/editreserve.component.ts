import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/Services/reserve.service';
import { Reserve } from 'src/app/Models/reserve';
import { ReserveEdit } from 'src/app/Models/reserveEdit';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-editreserve',
  templateUrl: './editreserve.component.html',
  styleUrls: ['./editreserve.component.css']
})
export class EditreserveComponent implements OnInit {

  reserve: any;
  reserveEdit: ReserveEdit = new ReserveEdit();


  constructor(private reserveService: ReserveService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idReserva");
    this.reserveService.getReserveById(+id)
    .subscribe(data=>{
      this.reserveEdit.user=this.userService.getCurrentUserId();
      this.reserve=data;
      this.reserveEdit.amountOfPeople=this.reserve.amountOfPeople;
      this.reserveEdit.functionId=this.reserve.functionId;
    })
  }


  Actualizar(reserveEdit: ReserveEdit){
    this.reserveService.updateReserve(reserveEdit,localStorage.getItem("idReserva"))
    .subscribe(data => {
      //this.reserveEdit=data;
      console.log(localStorage.getItem("idReserva"));
      alert("Se actualizo con exito");
      this.router.navigate(["reserves"])
    })
  }

}
