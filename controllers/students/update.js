const { validationResult } = require('express-validator');
const _ = require('lodash')
const Students = require('../../models/students');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const data = req.body;
    try {
        if (_.isEmpty(data)) { throw new Error('Body has no data.'); }
        delete data.id;
        delete data.createdAt;
        delete data.updatedAt;
        const student = await Students.update({ ...data }, { where: { id }});
        if (!student[0]) { throw new Error('Student not found'); }
        return res.json({ msg: 'success', data: 'Student updated successfully.' });
    } catch (err) {
        return res.status(400).json({ msg: 'error', data: err.message });
    }
}