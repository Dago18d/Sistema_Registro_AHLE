const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datosPsicologicosSchema = new Schema({

    
    id: {type: String},
    comportamientos: {type: String},
    enfermedad_trastorno: {type: String}
    




},{versionKey:false});

const datosPsicologicos = mongoose.model('Datos_Psicologicos', datosPsicologicosSchema);

module.exports = datosPsicologicos;