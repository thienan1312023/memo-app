const express = require('express');
const PORT = process.env.PORT || 3005;
//const { mongoose } = require('./db.js');

const app = express();

app.use(express.static('assets'));
app.use(express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => console.log('Server started at port in env'));
