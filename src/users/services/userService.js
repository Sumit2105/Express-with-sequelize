const UsersActions = require('../models/usersActions');
const userAction = new UsersActions();

const service = {};

service.getUsers = async () =>{
    return [{name: "user1", company:"tal"}];
}

service.addUser = async ({userName, email, password}) => {

}

service.updateUser = async ({id, userName, email, password}) => {

}

service.deleteUser = async (id) => {

}

module.exports = service;