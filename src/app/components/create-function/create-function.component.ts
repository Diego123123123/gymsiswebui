import { Component, OnInit } from '@angular/core';

import {FuntionService} from '../../Services/funtion.service';
import {MyFunction} from '../../Models/function';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.css']
})
export class CreateFunctionComponent implements OnInit {



  public func = new MyFunction();

  constructor(private funtionService: FuntionService, private router: Router) { }
  ngOnInit() {
  }

  createFunction() {
    console.log(this.func)
    this.funtionService.postFunction({
      "movieName":this.func.movieName,
      "schedule":this.func.schedule,
		"room":this.func.room
    }).subscribe((resp) => {
      this.router.navigate(["adminhome"]);
    });
  }

}
