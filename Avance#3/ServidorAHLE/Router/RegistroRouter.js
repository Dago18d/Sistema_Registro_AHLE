//Rutas
const express = require('express');
const router = express.Router();
const RegistroController = require('..//Controller/RegistroController');

//api/products
router.post('/', RegistroController.registroDato);
router.get('/', RegistroController.getRegistros);
router.put('/:id', RegistroController.updateRegistro);
router.get('/:id', RegistroController.getRegistro);
router.delete('/:id', RegistroController.deleteRegistro);

module.exports = router;