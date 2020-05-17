const Express=require("express");
const Router=Express.Router();
const multer=require("multer");
const Image=require("../models/image");


Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage })


Router.post('/upload', upload.single('file'),(req, res, next)=>{
  console.log(req);
  const file=req.file;
  Image.upload(file,(err)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});


module.exports=Router;
