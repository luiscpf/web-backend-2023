var express = require('express');
var indexController = require('../controllers/indexController');
var router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello World");
});

router.post('/signup', indexController.signup);
router.post('/login', indexController.login);

module.exports = router;
