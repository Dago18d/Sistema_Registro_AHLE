import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial-a',
  templateUrl: './historial-a.component.html',
  styleUrls: ['./historial-a.component.css']
})
export class HistorialAComponent implements OnInit {


  historialForm: FormGroup;
  title= "Crear Registro Historial";
  id: string | null;
productForm: any;


  constructor(private fb: FormBuilder, private router: Router, private _registrohistorial: HistorialService, private aRouter: ActivatedRoute) {
    this.historialForm = this.fb.group({
      nivelEducativo: ['', Validators.required],
      ultimoGradoEscolar: ['', Validators.required],
      institucionAnterior: ['', Validators.required],
      AreaInteres: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addRegistro() {

    const HISTORIAL: Historial = {
      nivelEducativo: this.historialForm.get('nivelEducativo')?.value,
      ultimoGradoEscolar: this.historialForm.get('ultimoGradoEscolar')?.value,
      institucionAnterior: this.historialForm.get('institucionAnterior')?.value,
      AreaInteres: this.historialForm.get('AreaInteres')?.value,

    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._registrohistorial.updateHistorial(this.id, HISTORIAL).subscribe(data => {
        this.router.navigate(['/tabla-historial']);
      }, error => {
        console.log(error);
        this.historialForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(HISTORIAL);
      this._registrohistorial.saveHistorial(HISTORIAL).subscribe(data => {
        this.router.navigate(['/tabla-historial']);
      }, error => {
        console.log(error);
        this.historialForm.reset();
      })
    }
  }

    Edit() {

      if (this.id !== null) {
        this.title = 'Editar Registros';
        this._registrohistorial.getAHistorial(this.id).subscribe(data => {
          this.historialForm.setValue({
            nombre: data.nombre,
            apellido: data.apellido,
            motivo: data.motivo,
            referencias: data.referencias,
            encargado: data.encargado,
            ubicacion: data.ubicacion
          })
        })
      }
    }
}
