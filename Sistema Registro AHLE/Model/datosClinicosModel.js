

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datosClinicosSchema = new Schema({

    id:{type: String},
    alergias:{type: String},
    padecimiento: {type: String},
    medicamentos:{type: String},
    contactoEmergencia:{type: String}



},{versionKey: false});

const datosClinicos = mongoose.model('Datos_Clinicos', datosClinicosSchema);

module.exports = datosClinicos;
