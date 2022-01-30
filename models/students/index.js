const Sequelize = require('sequelize');
const db = require('../../database');

const Student = db.define(
    'Student',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        f_name: {
            type: Sequelize.STRING,
            required: true,
        },
        l_name: {
            type: Sequelize.STRING,
            required: true,
        },
        age: {
            type: Sequelize.INTEGER,
            required: true,
        },
        course: {
            type: Sequelize.STRING,
            required: true,
        },
        createdAt: {
            type: 'TIMESTAMP',
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    {
        paranoid: false,
        timestamps: true
    }
);

Student.sync().then(function () {
    // Table created
});

module.exports = Student;