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
        pool.query('SELECT * FROM Departamento WHERE depto = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    create:(pais, depto, nomdepto, callback)=> {
        pool.query('INSERT INTO Departamento (pais, depto, nomdepto) VALUES ($1, $2, $3)', [pais, depto, nomdepto], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    update:(pais, depto, nomdepto, callback)=> {
        pool.query('UPDATE Departamento SET nomdepto = $3 WHERE depto = $2', [pais, depto, nomdepto], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    delete:(depto, callback)=> {
        pool.query('DELETE FROM Departamento WHERE depto = $1', [depto], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
};

module.exports = Depto;