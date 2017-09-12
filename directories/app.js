var fs = require('fs');

//-----------Synchroness reading/writing-------

// make directory
fs.mkdirSync('test');

// remove directory
fs.rmdirSync('test');

//-----------Asynchroness reading/writing-------

// make directory
fs.mkdir('stuff', function(err) {
    if (err) {
        console.log(err);
    }
});

// remove directory
fs.rmdir('stuff', function(err) {
    if (err) {
        console.log(err);
    }
});
