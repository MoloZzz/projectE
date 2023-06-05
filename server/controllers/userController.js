const ApiError = require('../error/apiError');
const apiError = require('../error/apiError');

class UserController{
    async registration(req,res){

    }

    async login(req,res){

    }

    async check(req,res, next){

        const {id} = req.query;
            if(!id){
                return next(ApiError.badRequest('Не заданий ID'));
            }

        res.json(id);
    }
}

module.exports = new UserController();