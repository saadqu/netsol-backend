const Students = require('../../models/students');

module.exports = async (req, res) => {
    const students = await Students.findAll();
    return res.json({ msg: 'success', data: students });
}