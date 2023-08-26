const { configDotenv } = require('dotenv');
const apiError = require('../error/apiError');
const {User,Basket} = require('../models/models');
const bcrypt  = require('bcrypt');
const jwt  = require('jsonwebtoken');


const generateJWT = (id,email,role) =>{
    return jwt.sign(
    
        {id: id, email, role},

        process.env.SECRET_KEY,

        {expiresIn: '24h'}
        
        );

        
}



class UserController{
    async registration(req,res,next){

        try{
            const {email, password, role} = req.body;

            if(!email || !password){
                return next( apiError.badRequest("Пустий імейл або пароль"));
            }
            
            const candidate = await User.findOne({where: {email}});
    
            if(candidate){
                return next(apiError.badRequest("Користувач з таким ім'ям вже існує"));
            }
    
            const hashPassword = await bcrypt.hash(password,3);
    
            const user = await User.create({email, password: hashPassword,role: "USER"});

            const basket = Basket.create({userId: user.id});
            
            const token = generateJWT(user.id,user.email,user.role);
    
                return res.json(token);

        }catch(e){
            return next(apiError.badRequest(e.message));
        }
        

        


    
    }

    async login(req,res,next){

        try{

            const {email, password} = req.body;

            const user = await User.findOne({where: {email}});

            if(!user){
                return next(apiError.internal("Користувач не зареєстрований"));
            }

            
            let comparePassword = bcrypt.compareSync(password, user.password);

            if(!comparePassword){
                return next(apiError.internal("Пароль не вірний"));
            }

            const token = generateJWT(user.id,user.email,user.role);

            return res.json(token);

        }catch(e){
            return next(apiError.badRequest(e.message));
        }
        

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