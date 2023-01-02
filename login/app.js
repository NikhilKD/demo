const express = require("express");
const bodyParser = require("body-parser");
const dashboard=require("../dashboard/app");
// const firestore=require("firebase/firestore");
const userService = require("../config/config.js");
// const app = express();
const path = require("path");
const router = express.Router();

router.use(express.json());
router.use(bodyParser.json());
router.use(express.urlencoded());

var name;

router.post("/signup", async (req, res) => {
  console.log(req.body);
    const { email, password } = req.body;
    try {
      const user = await userService.addUser(email, password);
      const user1= await userService.sendEmail();
      res.json(user1);
      if(res.status(201)){
          console.log("login successful");
          name=email;
          return res.redirect('/dashboard');
      }
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  });
  
  router.post("/signin", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const user = await userService.authenticate(email, password);
      if(res.status(201)){
        name=email;
        console.log("login successful");
        return res.redirect('/dashboard');
    }
    } catch (err) {
      res.status(401).json({ error: err.message });
      console.log('login failed');
      
    }
  });
  userName=()=>{
    return name;
  }
  // router.post('/forgot-password',async(req,res)=>{
  //   const {email}=req.body;
  //   if (!email) {
  //     return res.status(422).json({ email: "email is required" });
  //   }
  //   try {
  //     const user= await userService.forgotPassword(email);
  //     res.json(user);
  //   }catch(error){
  //     console.log(error);
  //     let errorCode = error.code;
  //     let errorMessage = error.message;
  //     if (errorCode == "auth/invalid-email") {
  //       return res.status(500).json({ error: errorMessage });
  //     } else if (errorCode == "auth/user-not-found") {
  //       return res.status(500).json({ error: errorMessage });
  //     }
  //   }
  // });

router.use(express.static(__dirname));
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
module.exports = {router,userName};
// exports=router;