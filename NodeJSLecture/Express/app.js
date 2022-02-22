const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const port = process.env.PORT || 3001;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('Request URL:' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');
});

//Routing example
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});


app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thanks you!')
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);

