var express=require('express');

var http = require('http');
var port = process.env.PORT || 3000;


var app=express();

app.get('/',function(req,res)
{
    res.send('Hello express!');
});

app.get('/demo',function(req,res)
{
    res.send('Hello Demo!');
});
var server=app.listen(port,function() {});
