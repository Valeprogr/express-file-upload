const express = require("express");
const app = express();
const PORT = 4000;


app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`)
})