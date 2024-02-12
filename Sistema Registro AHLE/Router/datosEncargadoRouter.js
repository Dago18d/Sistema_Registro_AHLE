const express = require('express')

const router = express.Router()

const datosEncargadoRouter = require('../Controller/datosEncargadoControler')

//Mostrar 
router.get('/', datosEncargadoRouter.visualizar);

//Insertar
router.post('/crear', datosEncargadoRouter.crear);

//Post
router.post('/editar', datosEncargadoRouter.editar);

//delete 
router.get('/borrar/:id', datosEncargadoRouter.eliminar);

module.exports = router;