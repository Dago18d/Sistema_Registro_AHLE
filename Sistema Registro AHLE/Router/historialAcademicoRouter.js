const express = require('express')

const router = express.Router()

const historialAcademicoRouter = require('../Controller/historialAcademicoController')

//Mostrar 
router.get('/', historialAcademicoRouter.visualizar);

//Insertar
router.post('/crear', historialAcademicoRouter.crear);

//Post
router.post('/editar', historialAcademicoRouter.editar);

//delete 
router.get('/borrar/:id', historialAcademicoRouter.eliminar);

module.exports = router;