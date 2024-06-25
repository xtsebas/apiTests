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
};

module.exports = deptoController;