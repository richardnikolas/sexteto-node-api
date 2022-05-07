const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresa');
const devedorController = require('../controllers/devedor');
const tituloController = require('../controllers/titulo');

//* Empresa */
router.get('/empresas', empresaController.getAllEmpresas);
router.get('/empresa/:cpfcnpj', empresaController.getEmpresa);

//* Devedor */
router.get('/devedores', devedorController.getAllDevedores);
router.get('/devedor/::cpfcnpj', devedorController.getDevedor);

//* Titulo */
router.get('/titulos', tituloController.getAllTitulos);
router.get('/titulos/:cpfcnpj', tituloController.getTitulosPorEmpresa);

module.exports = router;
