const Express=require("express");
const BodyParser=require("body-parser");
const cors=require("cors");
const multer=require("multer");


const App=Express();
const port=3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, 'IU_'+file.originalname)
  }
})

const upload = multer({ storage: storage })

App.use(BodyParser.json());
App.use(cors());


App.listen(port,()=>{
    console.log("Port Works!");
});


App.get("/",(req,res)=>{
    res.send("Image-Upload!")
});

App.post('/file', upload.single('file'),(req, res, next)=>{
  const file=req.file;
  console.log(file.fieldname);
  if(!file){
    res.json({state:false,msg:"Failed To Upload!"});
  }
  else{
    res.json({state:true,msg:"Successfully Uploaded!"});
  }
});
