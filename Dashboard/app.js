const express=require('express');
const app = express();
const path = require("path");
const login = require("../login/app.js");
// const router = express.Router();
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname));
console.log(login.name);
app.get('/',async(req,res)=>{
    const user=await userName();
    res.render(path.join(__dirname+'/index'),{message:user});
});
console.log("hello")
module.exports = app;