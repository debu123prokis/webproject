const express=require('express');
const app=express();
const parser=require('body-parser');
const path=require('path');
const hbs=require('hbs');
const { render } = require('express/lib/response');

const tempPath=path.join(__dirname,'template');
const partialsPath=path.join(__dirname,'template/partials');
app.use(parser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','hbs');
// app.set('views',tempPath);
hbs.registerPartials(partialsPath);

app.get("/",function(req,res){
    res.render('home');
});
app.get("/about",function(req,res){
    res.render('about');
});
app.get("/contact",function(req,res){
    res.render('contact');
});
app.get("/",function(req,res){
    res.send("Its Homepage");
});
app.get("*",(req,res)=>{
    res.render('404');
});
app.get("/about/*",function(req,res){
    res.render('404');
});

app.listen(4521,function(){
    console.log("Server is running fine at port 4521!!!");
});