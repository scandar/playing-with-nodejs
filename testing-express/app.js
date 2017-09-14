var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
// middleware for static files
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/',function(req,res) {
    res.render('index');
});

app.get('/profile/:name', function (req,res) {
    var data = {
        name: req.params.name,
        age: 20,
        hobbies: ['coding', 'music', 'movies']
    };

    res.render('profile', {data: data});
});

app.get('/contact', function (req,res) {
    res.render('contact', {qs:req.query});
});

app.post('/contact', urlencodedParser,function (req, res) {
    // if(!req.body) return res.send(400);
    res.render('contact-success', {data: req.body});
});

app.get('*', function (req,res) {
    res.render('404');
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on port 3000');
    }
});
