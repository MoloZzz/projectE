const {Autor} = require('../models/models');

const ApiError = require('../error/apiError');

class AutorController{
    async create(req,res){
        const {name} = req.body;
        const autor = await Autor.create({name});
        return res.json(autor);
    }

    async getAll(req,res){
        const autors = await Autor.findAll();
        return res.json(autors);
    }

}

module.exports = new AutorController();