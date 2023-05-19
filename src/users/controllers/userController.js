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

module.exports = ctr;