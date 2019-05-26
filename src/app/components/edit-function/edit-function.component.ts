import { Component, OnInit } from '@angular/core';
import { FuntionService } from 'src/app/Services/funtion.service';
import { Router } from '@angular/router';
import { MyFunction } from 'src/app/Models/function';

@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  constructor(private router: Router, private myfunctionService: FuntionService) { }

  myFunction : any;
  
  ngOnInit() {
    this.myFunction = this.myfunctionService.getFunctionById()
    .subscribe(resp =>{
      this.myFunction=resp;
    })
  }


}
