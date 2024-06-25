const { Pool } = require('pg');
const config = require('../config.js');

const pool = new Pool(config.database);

const Persona = {
    getAll: (callback) => {
        pool.query('SELECT * FROM Persona', (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    getById: (id, callback) => {
        pool.query('SELECT * FROM Persona WHERE Idpersona = ?', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
};

module.exports = Persona;