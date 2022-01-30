const express = require('express');
const cors = require('cors');
const una = require('./routes/una');
const config = require('./config');
const db = require('./database');
const app = express();
const router = express.Router();
const PORT = config.server.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/una', una);
router.get('/', function (req, res) {
    res.json('Welcome to Netsol Assessment developed by Saad Qureshi')
})
app.use(router);

app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log('Database connected successfully');
        console.log(`listening on ${PORT}`)
    } catch(err) {
        console.error('Unable to connect to database', err.message);
    }
});

module.exports = app;
