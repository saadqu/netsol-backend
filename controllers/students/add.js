const { validationResult } = require('express-validator');
const Students = require('../../models/students');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;
    try {
        const student = await Students.create(data);
        return res.json({ msg: 'success', data: student });
    } catch (error) {
        return res.status(400).json({ msg: 'error', data: err.message });
    }
}