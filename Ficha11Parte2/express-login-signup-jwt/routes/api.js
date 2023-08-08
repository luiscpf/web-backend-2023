var express = require('express');

var apiController = require('../controllers/apiController');
var router = express.Router();

// significa que todos os endpoints vão utilizar este middleware
router.use(middleWareDelete);


// http:localhost:3000/api GET
router.get('/', apiController.getApi);
router.delete('/', apiController.deleteApi);
router.get('/:cid/orders/:oid', apiController.getApi);

function middleWareDelete(req, res, next){
    console.log("THIS IS middleWareDelete");
    next();
}

module.exports = router;