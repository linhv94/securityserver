<<<<<<< HEAD
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs'); // use ejs as the view engine
app.use('/', router);

app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

router.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(app.get('port'), function () {
    console.log(`Server is running on ${app.get('port')}`);
});

module.exports = app;
=======
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs'); // use ejs as the view engine
app.use('/', router);

app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

router.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(app.get('port'), function () {
    console.log(`Server is running on ${app.get('port')}`);
});

module.exports = app;
>>>>>>> 58fa4b263f71c403c2c0d696c06ea3cb8c9a9ec4
