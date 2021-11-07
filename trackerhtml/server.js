const express=require("express");
const path=require("path");
const app=express();
//console.log(path.join(__dirname,"./public"));
const staticPath=path.join(__dirname,"./public");
app.use(express.static(staticPath));

app.get('/',(req,res)=>res.send('Your Tracker'));
const PORT=process.env.PORT||3000;
app.listen(PORT,console.log(`Server started at port ${PORT}`));
