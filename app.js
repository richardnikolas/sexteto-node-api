const express = require('express');
const router = express.Router();
const path = require('path');
const { sequelize } = require('./database/db');
const { initiliazeDb } = require('./database/initializeDb');

const app = express();

const allRoutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//* Checking connection with database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

initiliazeDb();

// add router in the Express app.
app.use('/', router);
app.use(allRoutes);

app.listen(3000);
