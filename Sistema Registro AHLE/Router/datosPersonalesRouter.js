const express = require('express')

const router = express.Router()

const datosPersonalesRouter = require('../Controller/datosPersonalesController')

//Mostrar 
router.get('/', datosPersonalesRouter.visualizar);

//Insertar
router.post('/crear', datosPersonalesRouter.crear);

//Post
router.post('/editar', datosPersonalesRouter.editar);

//delete 
router.get('/borrar/:id', datosPersonalesRouter.eliminar);

module.exports = router;