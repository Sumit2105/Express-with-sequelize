const appRootPath = require('app-root-path');
const { Actions } = require(`${appRootPath}/lib/sequelize`);

class UserActions extends Actions{
    constructor(){
        super('usersModels');
    }
}

module.exports = UserActions;