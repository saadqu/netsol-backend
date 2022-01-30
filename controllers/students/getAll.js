const Students = require('../../models/students');

module.exports = async (req, res) => {
    const students = await Students.findAndCountAll();
    return res.json({ msg: 'success', ...students });
}