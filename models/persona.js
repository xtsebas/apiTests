const { Pool } = require('pg');
const config = require('../config.js');
const { create, update } = require('./depto.js');

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
        pool.query('SELECT * FROM Persona WHERE Idpersona = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    },
    create:(idpersona, nombre_completo, pais, departamento, direccion, callback)=> {
        pool.query('INSERT INTO Persona (idpersona, nombre_completo, pais, departamento, direccion) VALUES ($1, $2, $3, $4, $5)', [idpersona, nombre_completo, pais, departamento, direccion], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    update:(idpersona, nombre_completo, pais, departamento, direccion, callback)=> {
        pool.query('UPDATE Persona SET nombre_completo = $2, pais = $3, departamento = $4, direccion = $5 WHERE idpersona = $1', [idpersona, nombre_completo, pais, departamento, direccion], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
    delete:(idpersona, callback)=> {
        pool.query('DELETE FROM Persona WHERE idpersona = $1', [idpersona], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results);
        });
    },
};

module.exports = Persona;