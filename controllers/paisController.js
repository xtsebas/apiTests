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
    create: (req, res) => {
        const paisData = req.body;
        Pais.create(paisData, (data) => {
            res.json(data);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const paisData = req.body;
        Pais.update(id, paisData, (data) => {
            res.json(data);
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        Pais.delete(id, (data) => {
            res.json(data);
        });
    },
};

module.exports = paisController;