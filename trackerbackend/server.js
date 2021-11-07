const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const { createConnection } = require("typeorm");

createConnection()
.then(async(con)=>{
    app.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS");
        res.header("Access-Control-Allow-Headers","Content-Type");
        next();
    });
    app.use(express.json());
    const port=process.env.port||8081;
    app.listen(8081,console.log(`Server Started At Port ${port}`));
    app.use("/user",require('./routes/user'));
    
   
    
})
.catch((error)=>console.log("Typeorm Connection Error : ",error))