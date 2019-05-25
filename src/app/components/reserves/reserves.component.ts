import { Component, OnInit } from '@angular/core';
import {ReserveService} from "../../Services/reserve.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {
  userReserves: any;

  constructor(private reserveService: ReserveService, private userService: UserService) { }

  ngOnInit() {
    this.reserveService.getReservesByUserId(this.userService.getCurrentUserId()).subscribe((resp) => {
      this.userReserves = resp;
    });
  }

}
