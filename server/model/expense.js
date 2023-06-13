const sequelize = require('../util/dataBase')
const Sequelize = require('sequelize')
const ExpenseData = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name :{
        type:Sequelize.STRING ,
        allowNull: false,
        unique: true
    },
    amount:{
        type:Sequelize.INTEGER ,
        allowNull: false,
        unique: true
    },
    des:{
        type:Sequelize.STRING ,
        allowNull: false,
        unique: true
    },
    cata:{
        type:Sequelize.STRING ,
        allowNull: false,
        unique: true
    }
})
module.exports = ExpenseData