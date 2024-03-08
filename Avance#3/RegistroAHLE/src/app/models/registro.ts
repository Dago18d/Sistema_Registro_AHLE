export class Registro{
  _id?:number;
  nombre: string;
  apellido: string;
  motivo: string;
  referencias: string;
  encargado: string;
  ubicacion: string;

  constructor (nombre:string, apellido:string, motivo:string, referencias:string, encargado:string, ubicacion:string){

    this.nombre = nombre;
    this.apellido=apellido;
    this.motivo = motivo;
    this.referencias=referencias;
    this.encargado = encargado;
    this.ubicacion = ubicacion;
  }


}
