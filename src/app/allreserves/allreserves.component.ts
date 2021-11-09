import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../Services/reserve.service';
import { Reserve } from '../Models/reserve';

@Component({
  selector: 'app-allreserves',
  templateUrl: './allreserves.component.html',
  styleUrls: ['./allreserves.component.css']
})
export class AllreservesComponent implements OnInit {

  reserves: any;

  constructor(private reserveService:ReserveService) { }

  ngOnInit() {
    this.reserveService.getReserves()
    .subscribe(resp=>{
      this.reserves=resp;
    })
  }

}
