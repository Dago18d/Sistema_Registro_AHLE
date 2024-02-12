
const express = require('express');

const router= express.Router()

const Informacion_IngresoController = require('..//Controller/Informacion_IngresoController')

//Mostrar

router.get('/', Informacion_IngresoController.visualizar);

//Insertar 
router.post('/crear',Informacion_IngresoController.crear);

//Post
router.post('/editar', Informacion_IngresoController.editar);

//Delete
router.get('/borrar/:id', Informacion_IngresoController.eliminar);

module.exports = router;