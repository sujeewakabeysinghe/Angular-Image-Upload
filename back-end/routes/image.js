const Express=require("express");
const Router=Express.Router();
const multer=require("multer");
const Image=require("../models/image");
const fs=require("fs");


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
  const NewImage=new Image({
    data:fs.readFileSync(req.file.path),
    contentType:req.file.mimetype
  });

  Image.upload(NewImage,(err,result)=>{
    if(err){
      console.log(err);
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      console.log(result);
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});


module.exports=Router;
