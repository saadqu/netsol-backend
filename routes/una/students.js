const express = require('express');

const router = express.Router();
router.get('/', require('../../controllers/students/getAll'));

module.exports = router;