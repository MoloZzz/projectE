const {Autor} = require('../models/models');

const ApiError = require('../error/apiError');

class AutorController{
    
    async create(req,res){
        try{
            
            const {name} = req.body;
            
            const autor = await Autor.create({name});
            
            return res.json(autor);

        }catch(e){
            
            next(ApiError.badRequest(e.message));
        
        }
        
    }

    async getAll(req,res){
        const autors = await Autor.findAll();
        return res.json(autors);
    }

}

module.exports = new AutorController();