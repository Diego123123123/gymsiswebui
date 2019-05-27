import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuntionService } from 'src/app/Services/funtion.service';
import { EditFunction } from 'src/app/Models/function';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  constructor(private router:Router, private myFunctionService: FuntionService) { }

  myFunction:any;

  editFunction:EditFunction= new EditFunction();

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("functionId");
    this.myFunctionService.getFunctionById()
    .subscribe(data=>{
      this.myFunction=data;

    })
  }

  Actualizar(myFunction){
    this.editFunction.movieName=myFunction.movieName;
    this.editFunction.schedule=myFunction.schedule;
    this.editFunction.room=myFunction.room;
    this.myFunctionService.updateFunction(this.editFunction)
    .subscribe(data=>{
      this.myFunction=data;
      alert("Se actualizo con exito");
      this.router.navigate(['adminhome'])
    })
  }

  logOut() {
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }


}
