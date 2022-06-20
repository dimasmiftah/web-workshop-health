const indexController = require('../controllers/index.controller');
const perawatController = require('../controllers/perawat.controller');
const pasienController = require('../controllers/pasien.controller');
const tindakanController = require('../controllers/tindakan.controller');
const router = require('express').Router();

router.get('/', indexController.index);

//perawat
router.get('/perawat', perawatController.index);
router.get('/perawat/create', perawatController.create);
router.post('/perawat/create', perawatController.store);

//pasien
router.get('/pasien', pasienController.index);
router.get('/pasien/create', pasienController.create);
router.post('/pasien/create', pasienController.store);

//tondakan
router.get('/tindakan', tindakanController.index);
router.get('/tindakan/create', tindakanController.create);
router.post('/tindakan/create', tindakanController.store);

module.exports = router;
