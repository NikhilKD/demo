// const User= require('./config/config.js')
const express = require("express");
const bodyParser = require("body-parser");
const firestore=require("firebase/firestore");
const userService = require("./config.js");
const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.addUser(email, password);
    const user1= await userService.sendEmail();
    res.json(user1);
    if(res.status(201)){
        console.log("login successful");
    }
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
    console.log('login failed');
  }
});

app.post('/forgot-password',async(req,res)=>{
  const {email}=req.body;
  if (!email) {
    return res.status(422).json({ email: "email is required" });
  }
  try {
    const user= await userService.forgotPassword(email);
    res.json(user);
  }catch(error){
    console.log(error);
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode == "auth/invalid-email") {
      return res.status(500).json({ error: errorMessage });
    } else if (errorCode == "auth/user-not-found") {
      return res.status(500).json({ error: errorMessage });
    }
  }
});


// app.get("/", async (req, res) => {
//     const querySnapshot = await firestore.getDocs(User);
//     const list = querySnapshot .docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     res.send(list);
//   });

// app.post("/create", async (req, res) => {
//     const data = req.body;
//     const docRef = await firestore.addDoc(User, {data});
//     res.send({ msg: "User Added" });
// });

app.listen(4000, () => console.log("Up & RUnning *4000"));


