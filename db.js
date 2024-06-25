const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.database);

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database.');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to the PostgreSQL database:', err);
    } else {
        console.log('Successfully connected to the PostgreSQL database.');
    }
    release();
});