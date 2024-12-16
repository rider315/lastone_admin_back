const express = require('express');
const paperController = require('../controllers/paperController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/upload-paper', upload.fields([{ name: 'file' }, { name: 'coverImage' }]), paperController.uploadPaper);

module.exports = router;
