const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresa');
const devedorController = require('../controllers/devedor');
const tituloController = require('../controllers/titulo');
const cobrancaService = require('../controllers/cobranca');

//* Index */
router.get('/', (req, res) =>  res.render('index'));

//* Empresa */
router.get('/empresas', empresaController.getAllEmpresas);
router.get('/empresa/:cpfcnpj', empresaController.getEmpresa);
router.post('/empresa', empresaController.createEmpresa);

//* Devedor */
router.get('/devedores', devedorController.getAllDevedores);
router.get('/devedor/:cpfcnpj', devedorController.getDevedor);
router.get('/devedores/:cnpjEmpresa', devedorController.getDevedoresEmpresa);
router.post('/devedor', devedorController.createDevedor);

//* Titulo */
router.get('/titulos', tituloController.getAllTitulos);
router.get('/titulos/:cpfcnpj', tituloController.getTitulosPorDevedor);
router.post('/titulo', tituloController.createTitulo);

//* Cobranca */
router.post('/cobrarEmpresa', cobrancaService.executeCobrancaParaEmpresa);
router.post('/enviarEmail', cobrancaService.sendEmail);

//* Views */
router.get('/novaEmpresa', empresaController.novaEmpresa);
router.get('/novaEmpresaCriada', empresaController.novaEmpresaSuccess);

module.exports = router;
