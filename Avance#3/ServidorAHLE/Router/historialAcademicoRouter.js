//Rutas
const express = require('express');
const router = express.Router();
const   HistorialController = require('..//Controller/historialAcademicoController');

//api/products
router.post('/', HistorialController.historialDato);
router.get('/', HistorialController.getHistoriales);
router.put('/:id', HistorialController.updateHistorial);
router.get('/:id', HistorialController.getHistorial);
router.delete('/:id', HistorialController.deleteHistorial);

module.exports = router;