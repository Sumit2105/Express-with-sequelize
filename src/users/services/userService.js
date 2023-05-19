const UsersActions = require('../models/usersActions');
const userAction = new UsersActions();

const service = {};

service.getUsers = async () =>{
    return [{name: "user1", company:"tal"}];
}

module.exports = service;