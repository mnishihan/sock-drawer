require.paths.unshift(__dirname + "/vendor");

var http = require('http'),
    sys  = require('sys'),
    static = require('node-static/lib/node-static');


var server = http.createServer(function(request, response) {
    var file = new static.Server('./public', {
      cache: false
    });

    request.addListener('end', function() {
        file.serve(request, response);
    }); 

});


server.listen(8000);
