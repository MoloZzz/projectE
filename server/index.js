const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
require('dotenv').config();

const path = require('path');

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload({}));
app.use(express.static(path.resolve(__dirname,'static')));
app.use('/api',router);

app.use(errorHandler); //обов'язково остання(обробка помилок)



const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,()=>{
            console.log(`Server started on port ${PORT}`);
        })

    }catch(e){
        console.log(e);
    }
}

start();

