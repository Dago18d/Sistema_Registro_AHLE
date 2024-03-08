import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  getHistorial(id: string){
    throw new Error ('Metodo no implementado');
  }

  url = 'http://localhost:3000/api/historial';

  constructor(private http: HttpClient) { }
  getHistoriales(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteHistorial(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveHistorial(registro: Historial): Observable<any> {
    return this.http.post(this.url, registro);
  }

  getAHistorial(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateHistorial(id:string, registro:Historial): Observable<any> {
    return this.http.put(this.url + id, registro);
  }
}

