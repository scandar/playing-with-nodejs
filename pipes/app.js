var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream('writeme.txt');

myReadStream.pipe(myWriteStream);
