const Students = require('../../models/students');

module.exports = async (req, res) => {
    try {
        const students = await Students.findAndCountAll();
        return res.json({ msg: 'success', ...students });
    } catch (error) {
        return res.status(400).json({ msg: 'error', data: err.message });
    }
}