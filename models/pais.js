const { Pool } = require('pg');
const config = require('../config.js');
const { create, update } = require('./depto.js');

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
        pool.query('SELECT * FROM pais WHERE pais = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    create:(pais, nompais, callback) => {
        pool.query('INSERT INTO pais (pais, nompais) VALUES ($1, $2)', [pais, nompais], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    update:(pais, nompais, callback) => {
        pool.query('UPDATE pais SET nompais = $2 WHERE pais = $1', [pais, nompais], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    delete:(pais, callback) => {
        pool.query('DELETE FROM pais WHERE pais = $1', [pais], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
}

module.exports = Pais;