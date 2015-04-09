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

// var http = require('http')
// var bl = require('bl')

// var datastring = ''

// http.get(process.argv[2], function(res) {
//     res.pipe(bl(function (err, data) {
//         if (err){
//             console.error(err)
//         } 
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
//     // res.setEncoding('utf8')
//     // res.on('data', function(data){
//     //     datastring += data
//     // })
//     // res.on('error', console.error)
//     // res.on('end', function(res){
//     //     console.log(datastring.length)
//     //     console.log(datastring)
//     // })
// });

// var http = require('http')
// var bl = require('bl')
// var count = 0
// var dataList = []

// var finished = function(data) {
//     if (count == 3){
//         dataList.forEach(function(element){
//             console.log(element)
//         })
//     }
// }

// function httpGet(index){
//     http.get(process.argv[(index + 2)], function(res) {
//         res.pipe(bl(function (err, data) {
//             if (err){
//                 console.error(err)
//             } 
//             data = data.toString()
//             dataList[index] = data
//             count ++
//             finished(data, index)
//         }))
//     })
// }

// for (var i = 0; i < 3; i ++){
//     httpGet(i)
// }

// var net = require('net')
// var strftime = require('strftime')

// var server = net.createServer(function (socket) {
//   socket.end(strftime('%F %R', new Date()))
// })
// server.listen(process.argv[2])

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (request, response) {
//     response.writeHead(200, {'content-type': 'text/plain'})
//     fs.createReadStream(process.argv[3]).pipe(response)
// })

// server.listen(process.argv[2])

// var http = require('http')
// var fs = require('fs')
// var map = require('through2-map')

// var server = http.createServer(function (request, response) {
//     if (request.method != 'POST'){
//         return res.end('not post')
//     }
//     request.pipe(map(function (chunk){
//         return chunk.toString().toUpperCase()
//     })).pipe(response)
// })

// server.listen(Number(process.argv[2]))

var http = require('http')
var fs = require('fs')
var map = require('through2-map')
var url = require('url')

var server = http.createServer(function (request, response) {
    if (request.method == 'GET'){
        response.writeHead(200, {'content-type': 'application/json'})
        var u = url.parse(request.url, true)
        var date = new Date(u.query.iso)
        if (u.pathname == '/api/unixtime'){
            resp = JSON.stringify({unixtime: date.getTime()})
            response.end(resp)
        }
        if (u.pathname == '/api/parsetime'){
            resp = JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            })
            response.end(resp)
        }
    }
})

server.listen(Number(process.argv[2]))