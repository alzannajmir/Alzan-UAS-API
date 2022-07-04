const router = require('express').Router();
const {
    alzan_najmi
} = require('../controllers');

// GET localhost:8080/handphone =› Ambil data semua handphone
router.get('/alzan_najmi', alzan_najmi.getDataHandphone);

// GET localhost:8080/handphone/2=›Ambildatasemuahandphoneberda
router.get('/alzan_najmi/:id_HP', alzan_najmi.getDataHandphoneByID);

// POST localhost:8080/handphone/add=›Tambahdatahandphonekedatat
router.post('/alzan_najmi/add', alzan_najmi.addDataHandphone);

// POST localhost:8080/handphone/2=›Edit data handphone
router.post('/alzan_najmi/edit', alzan_najmi.editDataHandphone);

// POST localhost:8080/handphone/delete=>Delete data handphone
router.post('/alzan_najmi/delete/', alzan_najmi.deleteDataHandphone);

module.exports = router;
