const Pais = require('../models/pais');

const paisController = {
    getAll: (req, res) => {
        Pais.getAll((data) => {
            res.json(data);
        });
    },
    getById: (req, res) => {
        const { id } = req.params;
        Pais.getById(id, (data) => {
            res.json(data);
        });
    },
};

module.exports = paisController;