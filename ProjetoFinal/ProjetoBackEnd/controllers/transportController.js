const { Transport } = require('../sequelize');


//GET ALL Transport
exports.getAllTransports= (req, res, next) => {
    Transport.findAll().then(results => {
        res.send(results);
    })
};

//GET Transport BY ID
exports.getTransportsByID = (req, res, next) => {
    Transport.findByPk(req.params.id).then(results => {
        res.send(results);
    })
}
//DELETE Transport BY ID
exports.deleteTransportsByID = (req, res, next) => {
    Transport.findByPk(req.query.id).then(Transport => {
        if (!Transport) {
            return res.status(404).send('Transport not found');
        }
        user.destroy().then(() => {
            res.send(Transport);
        });
    });
    };
//CREATE NEW Transport - CHANGE TO POST
exports.createTransports = (req, res, next) => {
    newTransports = req.body;
    Transport.create(newTransports).then(results => {
        res.send(results);
    })
}
//UPDATE Transport BY ID - CHANGE TO PUT
exports.UpdateTransportsByID = (req, res, next) => {
    const details = req.body;
    Transport.update(details, {
        where: { id: req.params.id }
    }).then(() => {
        res.send(details);
    });
};
