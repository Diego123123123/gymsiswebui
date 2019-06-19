import { Component, OnInit } from '@angular/core';
import {MyFunction} from "../../Models/function";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {FuntionService} from "../../Services/funtion.service";
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  myFunctions: MyFunction[];

  constructor(private userService: UserService, private router: Router, private myfunctionService: FuntionService, private storage: AngularFireStorage) { }

  upLoadPercent: Observable<number>;
  urlImage: Observable<string>;

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

  onUpload(e){
    //console.log('subir',e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.upLoadPercent= task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=>this.urlImage=ref.getDownloadURL())).subscribe();
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

  isCollapse = false;   // guardamos el valor
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }

}
