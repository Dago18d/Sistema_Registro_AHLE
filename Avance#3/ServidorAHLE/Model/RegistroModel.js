const mongoose = require('mongoose');

const RegistroSchema= mongoose.Schema({

nombre:{type: String},
apellido:{type: String},
motivo: {type: String},
referencias: {type: String},
encargado: {type: String},
ubicacion: {type: String}

});


module.exports = mongoose.model('Registro', RegistroSchema);