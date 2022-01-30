const express = require('express');
const cors = require('cors');
const app = express();
const una = require('./una');
const router = express.Router();
const config = require('./config');
const PORT = config.server.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/una', una);
router.get('/', function (req, res) {
    res.json('Welcome to Netsol Assessment developed by Saad Qureshi')
})
app.use(router);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

module.exports = app;
