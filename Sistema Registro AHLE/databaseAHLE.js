
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/registroAhle';

mongoose.connect(url)

const db = mongoose.connection;

db.on('Error', console.error.bind(console, 'Error al conectar la Base de Datos con Mongo'));
db.once('open', function callback(){
    console.log('Conectandose a MongoBD...!');
})

module.exports = db;