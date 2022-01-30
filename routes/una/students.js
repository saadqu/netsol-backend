const express = require('express');
const { body } = require('express-validator');

const router = express.Router();
router.get('/', require('../../controllers/students/getAll'));
router.post(
    '/',
    body('f_name').not().isEmpty().trim().escape(),
    body('l_name').not().isEmpty().trim().escape(),
    body('age').isNumeric(),
    body('course').not().isEmpty().trim().escape(),
    require('../../controllers/students/add')
);

module.exports = router;