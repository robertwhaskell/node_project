// var mymod = require('./mymodule');

// var callback = function(err, data){
//     if (err){
//        return err;
//     }
//     data.forEach(function(file){
//         console.log(file)
//     });
    
// }
// mymod(process.argv[2], process.argv[3], callback);

var http = require('http')
var bl = require('bl')

var datastring = ''

http.get(process.argv[2], function(res) {
    res.pipe(bl(function (err, data) {
        if (err){
            console.error(err)
        } 
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
    // res.setEncoding('utf8')
    // res.on('data', function(data){
    //     datastring += data
    // })
    // res.on('error', console.error)
    // res.on('end', function(res){
    //     console.log(datastring.length)
    //     console.log(datastring)
    // })
});