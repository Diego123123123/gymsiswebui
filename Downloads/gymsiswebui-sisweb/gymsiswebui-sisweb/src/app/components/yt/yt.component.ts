import { Component, OnInit } from '@angular/core';
import { YtService } from 'src/app/Services/yt.service';

@Component({
  selector: 'app-yt',
  templateUrl: './yt.component.html',
  styleUrls: ['./yt.component.css'],
  providers: [YtService]
})
export class YtComponent implements OnInit {

  public valores: string;

  public videos: any = [];
  constructor(private _ys: YtService) { }

  ngOnInit() {

    this._ys.buscar("Peliculas 2019").subscribe(
      result=>{
        this.videos= result.items;
      }
    );
  }

  buscar2(){

  }

  isCollapse = false;   // guardamos el valor
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }

}
