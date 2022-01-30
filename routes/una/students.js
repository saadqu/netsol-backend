const express = require('express');
const { body, param } = require('express-validator');

const router = express.Router();
router.get('/', require('../../controllers/students/getAll'));
router.post(
    '/',
    body('f_name').not().isEmpty().trim().escape(),
    body('l_name').not().isEmpty().trim().escape(),
    body('age').isNumeric(),
    body('course').not().isEmpty().trim().escape(),
    require('../../controllers/students/add'),
);
router.delete(
    '/:id',
    param('id').not().isEmpty().trim().escape(),
    require('../../controllers/students/delete'),
);

module.exports = router;