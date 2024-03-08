import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent implements OnInit {

  tablaHistorial: Historial []=[]
  constructor(private _registroHistorial: HistorialService) { }

  ngOnInit(): void {
    this.getHistoriales();
  }

  getHistoriales(){
    this._registroHistorial.getHistoriales().subscribe(data => {
      console.log(data);
      this.tablaHistorial = data;
    }, error => {
      console.log(error);
    })

  }


  deleteHistorial(id: any){
    this._registroHistorial.deleteHistorial(id).subscribe(data => {
      this.getHistoriales();
    }, error => {
      console.log(error)
    })
  }
}
