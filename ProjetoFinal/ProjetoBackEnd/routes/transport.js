var express = require('express');
var TransportController = require('../controllers/transportController')

var router = express.Router();

/* GET transports listing. */
router.get('/', TransportController.getAllTransports);
router.get('/:id', TransportController.getTransportsByID);
router.delete('/:id', TransportController.deleteTransportsByID);
router.post('/create', TransportController.createTransports);
router.put('/:id', TransportController.UpdateTransportsByID);

module.exports = router;