
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '..//models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  getRegistro(id: string){
    throw new Error ('Metodo no implementado');
  }

  url = 'http://localhost:3000/api/registro';

  constructor(private http: HttpClient) { }
  getRegistros(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteRegistro(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveRegistro(registro: Registro): Observable<any> {
    return this.http.post(this.url, registro);
  }

  getARegistro(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editRegistro(id:string, registro:Registro): Observable<any> {
    return this.http.put(this.url + id, registro);
  }
}
