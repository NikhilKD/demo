const firestore=require('firebase/firestore');
const User= require('../config/dataconfig.js')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/',async(req,res)=>{
    const user=await userName();
    res.render(path.join(__dirname+'/index'));
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
})

app.get("/", async (req, res) => {
    const querySnapshot = await firestore.getDocs(User);
    const list = querySnapshot .docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  });

app.post("/create", async (req, res) => {
    const data = req.body;
    const docRef = await firestore.addDoc(User, {data});
    res.send({ msg: "User Added" });
});

module.exports = app;
