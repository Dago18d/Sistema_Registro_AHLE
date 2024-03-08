import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HistorialAComponent } from './components/historial-a/historial-a.component';
import { TablaHistorialComponent } from './components/tabla-historial/tabla-historial.component';

@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    RegistroComponent,
    TablaComponent,
    HistorialAComponent,
    TablaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
