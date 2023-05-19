const userService = require('../services/userService');
const ctr = {};

ctr.get = async (req, res, next) =>{
    try{
        const users = await userService.getUsers();
        console.log(users);
        return res.send(users); 
    }catch(err){
        return next(err);
    }
}

ctr.post = async (req, res, next) => {
    try{
        const {userName, email, password} = req.body;
        await userService.addUser({userName, email, password});
    }catch(err){
        return next(err);
    }
}

ctr.put = async (req, res, next) => {
    try{
        const {id} = req.params;
        const {userName, email, password}  = req.body;
        await userService.updateUser({id, userName, email, password});
    }catch(err){
        return next(err);
    }
}

ctr.delete = async (req, res, next) => {
    try{
        const {id} = req.params;
        await userService.deleteUser(id);
    }catch(err){
        return next(err);
    }
}

module.exports = ctr;