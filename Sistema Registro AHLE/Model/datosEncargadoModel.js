
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datosEncargadoSchema = new Schema({

    id:{type: String},
    nombre:{type:String},
    telefono:{type:Number},
    edad:{type: Number},
    correo:{type: String},
    Profesion:{type: String}


}, {versionKey: false});

const datosEncargado = mongoose.model('Datos_Encargado', datosEncargadoSchema);

module.exports = datosEncargado;