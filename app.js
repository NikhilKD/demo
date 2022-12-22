const express=require('express');
const app = express();
const path = require("path");
const router = express.Router();

const dashboard=require("./dashboard/app");
const login=require("./login/app");

app.use('/dashboard',dashboard);
app.use('/login',login);
// Routes
// app.use("/api", authRoutes);


// router.get("/", (req, res) => {
//     res.render(path.join(__dirname+'/index.html'));
// });
// Starting a server
app.listen(4000, () => {
    console.log("Listening on port 4000");
});