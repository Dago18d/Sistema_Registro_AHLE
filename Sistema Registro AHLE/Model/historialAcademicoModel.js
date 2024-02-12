
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historialAcademicoSchema = new Schema({


    id:{type: String},
    niveEducativo:{type: String},
    ultimoGradoEscolar:{type:String},
    institucionAnterior: {type: String},
    AreaInteres: {type: String}


},{versionKey: false});


const historialAcademico = mongoose.model("Historial_Academico", historialAcademicoSchema);

module.exports = historialAcademico;