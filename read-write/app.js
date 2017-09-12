var fs = require('fs');

//-----------Synchroness reading/writing-------
//reading
// var readMe = fs.readFileSync('readme.txt', 'utf8');
// console.log(readMe);

//writing
// fs.writeFileSync('writeme.txt', 'i wrote this with fs module!');


//-----------Asynchroness reading/writing-------
// reading
fs.readFile('readme.txt', 'utf8', function(err,data) {
    if (err)
        console.log(err);
    else
        console.log(data);
});

// writing
fs.writeFile('writeme.txt', 'this is written through fs module!', function (err) {
    if(err)
        console.log(err);
});


// deleting
fs.unlink('deleteme.txt', function(err) {
    if (err) {
        console.log(err);
    }
});
