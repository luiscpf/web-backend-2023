const Users = require('../sequelize').Users;

// var jwt = require('jsonwebtoken');

function generateAccessToken(email,password){
    var token = jwt.sign(jwt.sign({ email, password}, process.env.TOKEN_SECRET));
    return token;

}

exports.login = function (req, res){

    var {email, password} = req.body;
    Users.findOne({
        where:{
            email: email
        }
    }).then(user => {
        if(user == null){
            req.flash('loginMessage', 'No user found with that e-mail.');
            res.redirect('/login');
        }
        else if(user.password != password){
            req.flash('loginMessage', 'Oops! Wrong password.');
            res.redirect('/login');
        }
        else{
            const token = generateAccessToken(email, password);
            req.session.user= user;
            res.redirect('/profile');
            res.session.token = token;
            res.
        }
    })

}

// exports.signup = function (req, res){

//     var {email} = req.body;
//     var{password} = req.body;

// }