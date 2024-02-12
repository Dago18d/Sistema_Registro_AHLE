
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datosExSchema = new Schema({

    id:{type: String},
    nombre:{type: String},
    apellido:{type: String},
    identidad:{type: Number},
    fecha_nacimiento:{type: String},
    edad: {type: Number},
    tallaRopa: {type: String},
    tallaZapato: {type: String},
    discapacidad: {type: String}, 
    motivoSalida: {type:String}



}, {versionKey: false});

const datosExInternos= mongoose.model('Datos_Ex-Internos', datosExSchema);

module.exports = datosExInternos;