import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuntionService } from 'src/app/Services/funtion.service';
import { EditFunction } from 'src/app/Models/editFunction'

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  functionEdit: EditFunction = new EditFunction();

  constructor(private router: Router, private myFunctionService: FuntionService) { }

  myFunction = new EditFunction();
  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("functionId");
    this.myFunctionService.getFunctionById()
    .subscribe( data => {
      /*this.myFunction = data;*/
    })
  }

  Actualizar(reserveEdit: EditFunction){
    this.myFunctionService.updateFunction(localStorage.getItem("functionId"), reserveEdit)
    .subscribe(data => {
      //this.reserveEdit=data;
      console.log(localStorage.getItem("functionId"));
      alert("Se actualizo con exito");
      this.router.navigate(["adminhome"])
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
