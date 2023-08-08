const express = require('express');
const ExpensesController = require('../controllers/gastosController');

const router = express.Router();

/* GET gastos listing. */
router.get('/', ExpensesController.getAllGastos);
router.get('/:id', ExpensesController.getGastosByID);
router.delete('/:id', ExpensesController.deleteGastosByID);
router.post('/create', ExpensesController.createGastos);
router.put('/:id', ExpensesController.updateGastosByID); // Fixed function name

module.exports = router;
