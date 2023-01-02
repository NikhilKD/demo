const express=require('express');
const app = express();

const dashboard=require("./dashboard/app");
const login=require("./login/app.js");

app.use('/dashboard',dashboard);
app.use('/login',login.router);
// Routes
// app.use("/api", authRoutes);

// // Starting a server
app.listen(4000, () => {
    console.log("Listening on port 4000");
});