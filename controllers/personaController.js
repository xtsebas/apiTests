const Persona = require('../models/persona');

const personaController = {
    getAll: (req, res) => {
        Persona.getAll((data) => {
            res.json(data);
        });
    },
    getById: (req, res) => {
        const { id } = req.params;
        Persona.getById(id, (data) => {
            res.json(data);
        });
    },
};

module.exports = personaController;