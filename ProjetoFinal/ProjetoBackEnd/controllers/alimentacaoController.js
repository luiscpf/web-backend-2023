const { Alimentacao } = require('../sequelize');

//GET ALL Alimentacao
exports.getAllalimentacao = (req, res, next) => {
    Alimentacao.findAll().then(results => {
        res.send(results);
    })
};

//GET Alimentacao BY ID
exports.getalimentacaoByID = (req, res, next) => {
    Alimentacao.findByPk(req.params.id).then(results => {
        res.send(results);
    })
}
//DELETE Alimentacao BY ID
exports.deletealimentacaoByID = (req, res, next) => {
    Alimentacao.findByPk(req.query.id).then(Alimentacao => {
        if (!Alimentacao) {
            return res.status(404).send('Alimentacao not found');
        }
        user.destroy().then(() => {
            res.send(Alimentacao);
        });
    });
};
    
//CREATE NEW Alimentacao - CHANGE TO POST
exports.createalimentacao = (req, res, next) => {
    newalimentacao = req.body;
    Alimentacao.create(newalimentacao).then(results => {
        res.send(results);
    })
}
//UPDATE Alimentacao BY ID - CHANGE TO PUT
exports.UpdatealimentacaoByID = (req, res, next) => {
    const details = req.body;
    Alimentacao.update(details, {
        where: { id: req.params.id }
    }).then(() => {
        res.send(details);
    });
};

