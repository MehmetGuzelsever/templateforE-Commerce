const express   = require("express");
const mongoose  = require("mongoose");
const morgan    = require("morgan");
const cors      = require("cors");
const bodyParse = require("body-parser");
const path      = require("path");
const port      = 1907;

//Import Local 
const database = require('./config/database');

//Default Database Models
const model = require('./config/model');

//Routes Import
const router = require("./routes");

//Express App
var app = express();


//MongoDB Database Connection
mongoose.connect(database.db, {useNewUrlParser: true}, function(err) {
    if (err) {
        console.log("Database Connection Error!!!");
    }
    console.log("Database Connection");
});

//NPM Middleware's
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors());

//Static Layout
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//Routes
app.use('/api', router);

//NodeJS server (http://localhost:1907)
app.listen(port, function(err) {
    if (err) {
        console.log('Server Connection Error!!!');
    }
    console.log('Server Connected. Server Run on=>http://localhost:1907');
})