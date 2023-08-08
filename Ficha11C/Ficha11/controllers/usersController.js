const { Users } = require('../sequelize');

//GET ALL BOOKS
exports.getAllUsers = (req, res, next) => {
    Users.findAll().then(results => {
        res.send(results);
    })
};

//GET USE BY ID
exports.getUserByID = (req, res, next) => {
    Books.findByPk(req.params.id).then(results => {
        res.send(results);
    })
}

//DELETE USER BY ID
exports.deleteUserByID = (req, res, next) => {
    Users.destroy({ where: { id: req.params.id } })
    .then(results => {
        res.send("O livro de ID: " + req.params.id + " foi apagado");
    });
}

//UPDATE USER BY ID
exports.UpdateUserByID = (req, res, next) => {
    var details = req.body;
    Users.update(details, {where: {id: req.params.id} }).then(results => {
        res.send(results);
    })
}