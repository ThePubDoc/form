const Sequelize = require('sequelize');
const path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,"test.sqlite")
});

const User = sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phno : {
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

module.exports = {
    User : User,
}


sequelize.sync()
.then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occurred' ,error));
