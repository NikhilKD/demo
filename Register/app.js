const firestore=require('firebase/firestore');
const db= require('../config/dataconfig.js');
const users=require('../login/app.js');
const dashboard=require("../dashboard/app");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use(express.static(__dirname));

app.get('/',async(req,res)=>{
    res.render(path.join(__dirname+'/index'));
});


app.get("/", async (req, res) => {
    const querySnapshot = await firestore.getDocs(User);
    const list = querySnapshot .docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  });

app.post("/create", async (req, res) => {
    console.log(req.body);
    const user=await userName();
    console.log(user);
    const User = firestore.collection(db,user);
    const data = req.body;
    const docRef = await firestore.addDoc(User, {data});
    return res.redirect('/dashboard');
});

module.exports = app;
