const express = require('express');
const router = express.Router();

const empresaController = require('../controller/empresa');

//* Empresa */

router.get('/empresas', empresaController.getAllEmpresas);

//* Devedor */

//* Titulo */

module.exports = router;
