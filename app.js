const express = require('express');
const cors = require('cors');

const paisView = require('./views/paisView');
const personaView = require('./views/personaView');
const deptoView = require('./views/deptoView');
const config = require('../Backend/config.js');

const port = 8001;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send('Welcome to the API');
    console.log('hi')
})

app.use('/api/pais', paisView);
app.use('/api/persona', personaView);
app.use('/api/depto', deptoView);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});