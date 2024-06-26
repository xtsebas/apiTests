const Depto = require('../models/depto');

const deptoController = {
    getAll: (req, res) => {
        Depto.getAll((data) => {
            res.json(data);
        });
    },
    getById: (req, res) => {
        const { id } = req.params;
        Depto.getById(id, (data) => {
            res.json(data);
        });
    },
    create: (req, res) => {
        const deptoData = req.body;
        Depto.create(deptoData, (data) => {
            res.json(data);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const deptoData = req.body;
        Depto.update(id, deptoData, (data) => {
            res.json(data);
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        Depto.delete(id, (data) => {
            res.json(data);
        });
    },
};

module.exports = deptoController;