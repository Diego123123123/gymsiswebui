import { Component, OnInit } from '@angular/core';
import {MyFunction} from "../../Models/function";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {FuntionService} from "../../Services/funtion.service";

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

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

  logOut() {
    sessionStorage.removeItem["token"];
    this.router.navigate(['']);
  }

  eliminarFuncion(functionId):void{
    localStorage.setItem("functionId",functionId.toString());
    this.myfunctionService.deleteFunction().subscribe(resp=>{
      alert("Funcion Eliminada");
      this.router.navigate(['newfunction']);
    })
  }

  editarFuncion(functionId){
    localStorage.setItem("functionId",functionId.toString());
    this.router.navigate(['editfunction']);
  }

}
