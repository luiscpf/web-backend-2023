const { Gasto } = require('../sequelize');

// GET ALL Gastos
exports.getAllGastos = (req, res, next) => {
  Gasto.findAll().then(results => {
    res.send(results);
  });
};

// GET Gastos BY ID
exports.getGastosByID = (req, res, next) => {
  Gasto.findByPk(req.params.id).then(results => {
    res.send(results);
  });
};

// DELETE Gastos BY ID
exports.deleteGastosByID = (req, res, next) => {
  Gasto.findByPk(req.query.id).then(user => {
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.destroy().then(() => {
        res.send(Gasto);
    });
});
};

// CREATE NEW Gastos - CHANGE TO POST
exports.createGastos = (req, res, next) => {
  const newGasto = req.body;
  Gasto.create(newGasto).then(gasto => {
    res.send(gasto);
  });
};

// UPDATE Gastos BY ID - CHANGE TO PUT
exports.updateGastosByID = (req, res, next) => {
  const details = req.body;
  Gasto.update(details, {
      where: { id: req.params.id }
  }).then(() => {
      res.send(details);
  });
};
