var express=require('express');

var app=express();

app.get('/',function(req,res)
{
    res.send('Hello express!');
});

app.get('/demo',function(req,res)
{
    res.send('Hello Demo!');
});
var server=app.listen(3000,function() {});
