var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream('readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream('writeme.txt');
// myReadStream.pipe(myWriteStream);


// ---------SERVER---------
var server = http.createServer(function(req,res) {
    console.log(req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var data = [
            {name: 'girges', age:20},
            {name: 'tomato', age:5}
        ];
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('404.html').pipe(res);
    }

});


server.listen(3000, '127.0.0.1', function() {
    console.log("listening at port 3000");
});
