const User = require('../sequelize').User;
var jwt = require('jsonwebtoken');

function generateAccessToken(email, password) {
    var token = jwt.sign({ email, password }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
}

exports.signup = function (req, res) {
    var { email } = req.body;
    var { password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {

            User.create({ 'email': email, 'password': password })
                .then(user => {                    
                    var token = generateAccessToken(email, password);
                    res.status(200).json({ user, token });                  
                    //res.redirect('/profile');
                });
        }
        else {
            res.status(401).json({message: 'That e-mail is already taken.'}); 
        }
    }).catch(function (err) {
        // handle error;
        res.status(401).json({message: err}); 
    });
}


exports.login = function (req, res) {
    var { email, password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (user == null) {
            res.status(401).json({message: 'No user found with that e-mail'}); 
        }
        else if (user.password != password) {            
            res.status(401).json({message: 'Oops! Wrong password.'}); 
        } else {
            const token = generateAccessToken(email, password);      
            res.status(200).json({ user, token });     
        }
    }).catch(function (err) {
        // handle error;
        res.send(err)        ;
    });
}