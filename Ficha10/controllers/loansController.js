// const Loan = require('../sequelize').Loans;
// const Book = require('../sequelize').Books;
// const User = require('../sequelize').Users;

const {Loans, Books, Users} = require('../sequelize');

//GET ALL LOANS
exports.getAllLoans = (req, res, next) => {
    Loans.findAll({include:[Users, Books]}).then(results => {
        res.send(results);
    })
};

//GET LOAN BY ID
exports.getLoanByID = (req, res, next) => {
    Loans.findByPK(req.params.id, {include:[Users, Books]}).then(results => {
        res.send(results);
    })
}
//DELETE LOAN BY ID
exports.deleteLoanByID = (req, res, next) => {
    Loans.findByPK(req.params.id).then(results => {
        res.send(results);
    })
}
//CREATE NEW LOAN - CHANGE TO POST
exports.createLoan = (req, res, next) => {
    newLoan = req.body;
    Loans.update(newLoan).then(results => {
        res.send(results);
    })
}
//UPDATE LOAN BY ID - CHANGE TO PUT
exports.UpdateLoanByID = (req, res, next) => {
    var details = req.body;
    Loans.UpdateLoanByID(req.params.id, details).then(results => {
        res.send(results);
    })
}