var express = require('express');
const C = require('jsonwebtoken');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
/* GET Login page. */
router.get('/login', function(req, res) {
    res.render('login.ejs', { message: req.flash('LoginMessage') });
});

router.post('/login', indexController.Login);
router.post('signUp', indexController.SignUp);

// GET Profile page. 
router.get('/profile', authenticateTokenFromSession ,function(req, res) {
    res.render('profile.ejs', { user: req.session.user });
});


function authenticateTokenFromSession(res, req, next){
    const token  = req.session.token;
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET), (err, user) => {
        if(err) 
            return res.sendStatus(403);

        next();
    }
}


router.get('/signUp', function(req, res) {
    res.render('signup.ejs', { message: req.flash('SignUpMessage') });
});





module.exports = router;