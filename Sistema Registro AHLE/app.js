
const express = require('express');

const app = express();
const db = require('.//databaseAHLE');
/*
app.set('view engine', 'ejs');

*/

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const Informacion_Ingreso = require('.//Router/Informacion_IngresoRouter');
const datosPsicologicos = require('./Router/datosPsicologicosRouter');
const historialAcademico = require('.//Router/historialAcademicoRouter');
const datosPersonales = require('./Router/datosPersonalesRouter');
const datosExInternos = require('.//Router/datosExInternosRouter');
const datosEncargado = require('./Router/datosEncargadoRouter');
const datosClinicos = require('./Router/datosClinicosRouter');

app.use('/servidor', Informacion_Ingreso);


app.use(Informacion_Ingreso);
app.use(datosPsicologicos);
app.use(historialAcademico);
app.use(datosPersonales);
app.use(datosExInternos);
app.use(datosEncargado);
app.use(datosClinicos);


app.listen(3000,()=>{

    console.log('SERVER IS UP...!');
})
