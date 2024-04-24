const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const multer = require("multer");
const staticpath = path.join(__dirname,"../template/views");
app.set("views",staticpath);
app.set("view engine","hbs");
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("sign");
});

const upload = multer({
    storage : multer.diskStorage({
        destination : function(req,file,cb){
            cb(null,"../uploads")
        },
        filename : function(req,file,cb){
            cb(null,file.fieldname+Date.now().toString()+'.jpg');
        }
    })
})
 
app.post("/uploadfile",upload.single('file'),(req,res)=>{
    res.render("index");
});

app.listen(port,(err)=>{
    console.log('connected');
})