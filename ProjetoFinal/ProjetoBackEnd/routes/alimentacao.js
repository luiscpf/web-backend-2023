var express = require('express');
var EatController = require('../controllers/alimentacaoController')

var router = express.Router();

/* GET alimentacao listing. */
router.get('/all', EatController.getAllalimentacao);
router.get('/:id', EatController.getalimentacaoByID);
router.delete('/:id', EatController.deletealimentacaoByID);
router.post('/create', EatController.createalimentacao);
router.put('/:id', EatController.UpdatealimentacaoByID);

module.exports = router;