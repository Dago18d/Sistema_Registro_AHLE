const express = require('express')

const router = express.Router()

const datosPsicologicosRouter = require('../Controller/datosPsicologicosController')

//Mostrar 
router.get('/', datosPsicologicosRouter.visualizar);

//Insertar
router.post('/crear', datosPsicologicosRouter.crear);

//Post
router.post('/editar', datosPsicologicosRouter.editar);

//delete 
router.get('/borrar/:id', datosPsicologicosRouter.eliminar);

module.exports = router;