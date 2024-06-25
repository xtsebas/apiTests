const { Pool } = require('pg');
const config = require('../config.js');

const pool = new Pool(config.database);

const Depto = {
    getAll: (callback) => {
        pool.query('SELECT * FROM Departamento', (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    getById: (id, callback) => {
        pool.query('SELECT * FROM Departamento WHERE depto = ?', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
};

module.exports = Depto;