import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuntionService } from 'src/app/Services/funtion.service';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  constructor(private router:Router, private myFunctionService: FuntionService) { }

  myFunction:any;
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

  logOut() {
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }


}
