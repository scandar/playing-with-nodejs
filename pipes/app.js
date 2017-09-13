var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream('readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream('writeme.txt');
// myReadStream.pipe(myWriteStream);


// ---------SERVER---------
var server = http.createServer(function(req,res) {
    console.log(req.url);

    //plain text
    // var myReadStream = fs.createReadStream('readme.txt', 'utf8');
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // myReadStream.pipe(res);

    // html
    var myReadStream = fs.createReadStream('index.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    myReadStream.pipe(res);

    // JSON
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // var obj = {
    //     name: 'girges',
    //     job: 'web developer',
    //     age: 20
    // };
    // res.end(JSON.stringify(obj));

});


server.listen(3000, '127.0.0.1', function() {
    console.log("listening at port 3000");
});
