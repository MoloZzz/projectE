class HistoryController{
    async create(req,res){

        const {name, autorId,typeId, info} = req.body;
        const {img} = req.files;
    }

    async getAll(req,res){


    }

    async getOne(req,res){

        
    }

}

module.exports = new HistoryController();