const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;
const multer = require("multer");

app.use(express.static("images"));
app.use(express.static("."));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"images")
    },
    filename: (req,file, cb)=>{
        //console.log(file)
        cb(null,Date.now() + path.extname(file.originalname))
        //console.log(file.originalname)
    }
});
const upload = multer({ storage : storage});







app.post("/upload-profile-pic", upload.single('profile_pic'), (req,res,next)=>{
    console.log(req.file.path)
    
   res.send(`<h3>Image Uploaded!</h3><br><img src="${req.file.path}" alt="personal profile pictures"/>`)
});

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`)
})

