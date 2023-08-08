var express = require('express');
var jwt = require('jsonwebtoken');
var userController = require('../controllers/userController');
var router = express.Router();

//protect all of them
router.use(authenticateTokenFromHeaders);
//protect only some routes
//router.get('/',authenticateTokenFromHeaders, userController.getUsers);
router.get('/', userController.getUsers);

//middleware
function authenticateTokenFromHeaders(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];  //recebe o valor do token
  // Unauthorized
  if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

module.exports = router;
