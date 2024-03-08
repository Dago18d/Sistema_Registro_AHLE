import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialAComponent } from './components/historial-a/historial-a.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaHistorialComponent } from './components/tabla-historial/tabla-historial.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path : '', component: InicioComponent},
  {path : 'registro', component: RegistroComponent},
  {path : 'tabla', component: TablaComponent},
  {path : 'edit-registro/:id', component: RegistroComponent},
  {path : 'historial', component: HistorialAComponent},
  {path : 'tabla-historial', component: TablaHistorialComponent},
  {path : 'edit-historial/:id', component: HistorialAComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
