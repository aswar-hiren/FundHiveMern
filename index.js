const express= require("express");
const db=require("./MiddleWare");
const app= express();
const port=8000;
app.get("/",async (req,res)=>{
  var data= await db.donation.findAll().then((donation)=>{
    res.send(donation);
  });
});
app.listen(port,()=>{
    console.log("Server Is Liening");
});