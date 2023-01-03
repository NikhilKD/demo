const firestore=require('firebase/firestore');
const db= require('../config/dataconfig.js');
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
    const querySnapshot = await firestore.getDocs(firestore.collection(db,user));
    const list = querySnapshot .docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(list[0].data);
    res.render(path.join(__dirname+'/index'),{message:list[0].data});
});




console.log("hello")
module.exports = app;