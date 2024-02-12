const express = require('express')

const router = express.Router()

const datosClinicosRouter = require('../Controller/datosClinicosController')

//Mostrar 
router.get('/', datosClinicosRouter.visualizar);

//Insertar
router.post('/crear', datosClinicosRouter.crear);

//Post
router.post('/editar', datosClinicosRouter.editar);

//delete 
router.get('/borrar/:id', datosClinicosRouter.eliminar);

module.exports = router;