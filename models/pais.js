const { Pool } = require('pg');
const config = require('../config.js');

const pool = new Pool(config.database);

const Pais = {
    getAll: (callback) => {
        pool.query('SELECT * FROM pais', (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    getById: (id, callback) => {
        pool.query('SELECT * FROM pais WHERE pais = ?', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
}

module.exports = Pais;