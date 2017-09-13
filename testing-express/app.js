var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send('test');
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on port 3000');
    }
});
