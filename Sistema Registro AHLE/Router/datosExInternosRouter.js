const express = require('express')

const router = express.Router()

const datosExInternosRouter = require('../Controller/datosExInternosController')

//Mostrar 
router.get('/', datosExInternosRouter.visualizar);

//Insertar
router.post('/crear', datosExInternosRouter.crear);

//Post
router.post('/editar', datosExInternosRouter.editar);

//delete 
router.get('/borrar/:id', datosExInternosRouter.eliminar);

module.exports = router;