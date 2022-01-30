const { validationResult } = require('express-validator');
const Students = require('../../models/students');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    try {
        const student = await Students.destroy({
            where: { id }
        });
        if (!student) { throw new Error('Student not found'); }
        return res.json({ msg: 'success', data: 'Deleted Successfully.' });
    } catch (err) {
        return res.status(400).json({ msg: 'error', data: err.message });
    }
}