const mongoose = require('mongoose');

const historialAcademicoSchema= mongoose.Schema({

    nivelEducativo:{type: String},
    ultimoGradoEscolar:{type:String},
    institucionAnterior: {type: String},
    AreaInteres: {type: String}


});


module.exports = mongoose.model('Historial_Academico', historialAcademicoSchema);