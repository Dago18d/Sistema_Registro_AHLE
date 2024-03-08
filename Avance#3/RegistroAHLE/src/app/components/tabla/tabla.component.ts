import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tablaRegistro: Registro []=[]
  constructor(private _registroService: RegistroService) { }

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros(){
    this._registroService.getRegistros().subscribe(data => {
      console.log(data);
      this.tablaRegistro = data;
    }, error => {
      console.log(error);
    })

  }


  deleteRegistro(id: any){
    this._registroService.deleteRegistro(id).subscribe(data => {
      this.getRegistros();
    }, error => {
      console.log(error)
    })
  }
}





