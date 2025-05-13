http=require('http');

url=require('url');

querystring = require('querystring');

function onRequest(req,res){

var path = url.parse(req.url).pathname;

var query =url.parse(req.url).query;

var email =querystring.parse(query)["email"];

var password=querystring.parse(query)["password"];

if(email=="dharunprakashgt.23it@kongu.edu" && password=="23ITR034"){
    res.write("Successfully Logged in");
}else{
    res.write("Login Failure");
}


res.end();

}

http.createServer(onRequest).listen(5500);

console.log('Server has Started.......');