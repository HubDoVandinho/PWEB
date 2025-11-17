let http = require('http');
let server = http.createServer(function(req,res){
    res.end("<html><body>Site do UniRide</body></html>");
});
server.listen(3000);