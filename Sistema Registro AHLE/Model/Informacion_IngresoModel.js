const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Registro_IngresoSchema= new Schema({

id:{type: String},
nombre:{type: String},
apellido:{type: String},
motivo: {type: String},
referencias: {type: String},
encargado: {type: String},
ubicacion: {type: String}

},{versionKey: false});

const RegistroIngreso = mongoose.model('Registro_Ingreso', Registro_IngresoSchema);

module.exports = RegistroIngreso;