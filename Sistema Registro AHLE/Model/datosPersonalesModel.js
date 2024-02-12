
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datosPersonalesSchema = new Schema({

    id: {type: String},
    nombre:{type: String},
    apellido:{type: String},
    identidad:{type: Number},
    fecha_nacimiento:{type: String},
    edad: {type: Number},
    tallaRopa: {type: String},
    tallaZapato: {type: String},
    Discapacidad: {type: String}


},{versionKey: false});

const datosPersonales = mongoose.model('Datos_Personales', datosPersonalesSchema);

module.exports = datosPersonales;