const {User, Alimentacao, Gasto} = require('../sequelize');


//GET ALL Users
exports.getAll= (req, res, next) => {
    User.findAll({include:[ Alimentacao, Gasto]}).then(results => {
        res.send(results);
    })
};

//GET ALL Users with every information
exports.getAllUsers= (req, res, next) => {
    User.findAll().then(results => {
        res.send(results);
    })
};

//GET Users BY ID & Shows Gastos
exports.getUsersByID = (req, res, next) => {
    User.findByPk(req.params.id, {include:[Gasto]}).then(results => {
        res.send(results);
    })
}

//DELETE Users BY ID
exports.deleteUsersByID = (req, res, next) => {
    User.findByPk(req.query.id).then(user => {
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.destroy().then(() => {
            res.send(user);
        });
    });
};
//CREATE NEW Users - CHANGE TO POST
exports.createUsers = (req, res, next) => {
    newUsers = req.body;
    User.create(newUsers).then(results => {
        res.send(results);
    })
}
//UPDATE Users BY ID - CHANGE TO PUT
exports.UpdateUsersByID = (req, res, next) => {
    const details = req.body;
    User.update(details, {
        where: { id: req.params.id }
    }).then(() => {
        res.send(details);
    });
    };


