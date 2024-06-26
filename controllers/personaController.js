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
    create: (req, res) => {
        const personaData = req.body;
        Persona.create(personaData, (data) => {
            res.json(data);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const personaData = req.body;
        Persona.update(id, personaData, (data) => {
            res.json(data);
        });
    },
    delete: (req, res) => {
        const { id } = req.params;
        Persona.delete(id, (data) => {
            res.json(data);
        });
    },
};

module.exports = personaController;