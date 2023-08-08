const {Users} = require('../sequelize');
var jwt = require('jsonwebtoken');

function generateAccessToken(email, password) {
    return jwt.sign({email, password}, process.env._TOKEN_SECRET, {
        expiresIn: '18000s', });
}

//GET LOGIN
exports.Login = (req, res) => {
    var { email, password} = req.body;

    Users.findOne({
        where: {
            email: email,
        }
    }).then(results => { // results = email && password
        if (results == null) {
            req.flash('LoginMessage', 'No User found with this email');
            res.redirect('/login');
        }else if(results.password != password){
            req.flash('LoginMessage', 'Ops! Wrong Password!');
        }else {
            const token = generateAccessToken(email, password); //creates the token necessary for the cookie to be defined
            req.session.results = results; //RESULTS = USERS (EMAIL && PASSWORD)
            
            req.session.token = token;
            req.session.user = user;
            res.redirect('/profile');
            //res.cookie('acess_token', token, { //creation of the cookie through the existing token
              //  expires: new Date(Date.now() + 8 * 3600000) //when  the login is made, the cookie will have a certain time associated. After that it will expire
            //}).res.redirect('/profile'); // will redirect to the profile after the login is succesfull
        }
    })
}

//GET SIGN IN
exports.SignUp = (req, res) => {
    var { email, password} = req.body;

    Users.findOne({
        where: {
            email: email,
        }
    }).then(results => { // results = email && password
        if (results == null) {
            Users.create({ 'email':email, 'password' :password}).then(User => {
                //var token = generateAccessToken(email, password)
                req.session.results = results;
                //req.session.token = token;
                res.redirect('/profile');
            })
            }else if(results.password != password){
                req.flash('SignUpMessage', 'Ops! Wrong Password!');
            }else {
                //const token = generateAccessToken(email, password); //creates the token necessary for the cookie to be defined
                req.session.results = results; //RESULTS = USERS (EMAIL && PASSWORD)
                res.redirect('/profile');
                //req.session.token = token;
                //res.cookie('acess_token', token, { //creation of the cookie through the existing token
                //  expires: new Date(Date.now() + 8 * 3600000) //when  the login is made, the cookie will have a certain time associated. After that it will expire
                //}).res.redirect('/profile'); // will redirect to the profile after the login is succesfull
            }
    })
}