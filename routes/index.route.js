const indexController = require('../controllers/index.controller');
const perawatController = require('../controllers/perawat.controller');
const pasienController = require('../controllers/pasien.controller');
const tindakanController = require('../controllers/tindakan.controller');
//pushcomment
const router = require('express').Router();

router.get('/', indexController.index);

router.get('/perawat', perawatController.index);
router.get('/perawat/create', perawatController.create);
router.post('/perawat/create', perawatController.store);
router.get('/perawat/edit/:id', perawatController.edit);
router.post('/perawat/update/:id', perawatController.update);
router.post('/perawat/delete/:id', perawatController.destroy);

router.get('/pasien', pasienController.index);
router.get('/pasien/create', pasienController.create);
router.post('/pasien/create', pasienController.store);
router.get('/pasien/edit/:id', pasienController.edit);
router.post('/pasien/update/:id', pasienController.update);
router.post('/pasien/delete/:id', perawatController.destroy);

router.get('/tindakan', tindakanController.index);
router.get('/tindakan/create', tindakanController.create);
router.post('/tindakan/create', tindakanController.store);
router.get('/tindakan/edit/:id', tindakanController.edit);
router.post('/tindakan/update/:id', tindakanController.update);
router.post('/tindakan/delete/:id', tindakanController.destroy);

module.exports = router;