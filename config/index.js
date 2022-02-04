require('dotenv').config();

module.exports = {
    server: {
        PORT: process.env.PORT || 3000,
    },
    database: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.DB_NAME
    }
};