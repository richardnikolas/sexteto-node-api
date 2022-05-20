const { Sequelize } = require('sequelize');

//* LOCAL
// const sequelize = new Sequelize('afipio', 'root', 'root', {
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306
// });

//* HEROKU
const sequelize = new Sequelize('afipio', 'rodrigo@afipio', 'afipio@2022', {
    dialect: 'mysql',
    host: 'afipio.mysql.database.azure.com',
    port: 3306
});

module.exports = { sequelize };
