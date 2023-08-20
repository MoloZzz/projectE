const uuid = require('uuid');
const path = require('path');
const {History,HistoryInfo} = require('../models/models');
const ApiError = require('../error/apiError');
const { model } = require('../db');


class HistoryController{

    async create(req,res,next){

        try{

            const {name, autorId,typeId, info} = req.body;
            const {img} = req.files;
            
            let filename = uuid.v4() + ".jpg"; 

            img.mv(path.resolve(__dirname, '..', 'static', filename));

            const history = await History.create({name, autorId, typeId, info, img: filename});

            return res.json(history);

        } catch(e){

            next(ApiError.badRequest(e.message));

        }
        
    }

    async getAll(req, res, next){

        try{
            let {autorId, typeId, limit, page} = req.query;

            page = page || 1;
            limit = limit || 5;
            let offset = page * limit - limit;
    
    
            let histories;
    
    
            if(!autorId && !typeId){
                histories = await History.findAndCountAll({limit, offset});
            }
    
            if(autorId && !typeId){
                histories = await History.findAndCountAll({where:{autorId}, limit, offset});
            }
    
            if(!autorId && typeId){
                histories = await History.findAndCountAll({where:{typeId}, limit, offset});
            }
    
            if(autorId && typeId){
                histories = await History.findAndCountAll({where:{autorId, typeId}, limit, offset});
            }
    
            return res.json(histories);
        }catch(e){
            next(ApiError.badRequest(e.message));
        }
        
    }

    async getOne(req,res){
        //function is not work

        try{
            const {id} = req.params;

            const history = await History.findOne(
                {
                    where: {id},
                    include: [{model: HistoryInfo, as: 'info'}]
                },
            );

                return res.json(history);
                
        }catch(e){
                next(ApiError.badRequest(e.message));
        }
                
    }   
}

module.exports = new HistoryController();