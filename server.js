const express = require('express');
const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true,
}).then(() => {
    console.log("Connected to db");
}).catch(err => {
    console.log('Not conncted to db',err);
    process.exit();
});


app.get('/', (req,res) => {
    res.json({"message":"node version of datalake api."})
});

require('./app/routes/userinteraction.routes.js')(app);

app.listen(3000, () => {
    console.log("Listening on port 3000")
});