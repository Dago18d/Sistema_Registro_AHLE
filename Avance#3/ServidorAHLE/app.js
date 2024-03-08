const express = require('express');
const DBconnection =require('./config/AHLEbd');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());

//Ruta
app.use('/api/registro', require('.//Router/RegistroRouter'));
app.use('/api/historial', require('.//Router/historialAcademicoRouter'));

app.listen(3000, () => {
    console.log('The server is runnig')
})