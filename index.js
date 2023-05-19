const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const config = require('./config');
const {connection} = require('./lib/sequelize');
const databaseHandler = require('./adapters/databaseHandler');
const _ = require('lodash');

const db = connection.init({config});

if (!_.isNil(db)) {
    databaseHandler.add(db);

    db.authenticate().then(()=>{
        console.log('Database Connected');
    }).catch(err=>{
        console.log('Error: ' + err);
    })
}

const app = express();

app.use('/employeewise', router);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(cors("*"));


if(!_.isNil(db)){
    const PORT = config.SERVER_PORT || 5000;
    db.sync().then(()=>{
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    }).catch(err => console.log("Error: " + err));
}


