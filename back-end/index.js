const Express=require("express");
const BodyParser=require("body-parser");
const cors=require("cors");
const Mongoose=require("mongoose");
const Config=require("./config/database");
const Image=require("./routes/image");


const App=Express();
const connection=Mongoose.connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false});
const port=3000;


App.use(BodyParser.json());
App.use(cors());
App.use("/image",Image);


App.listen(port,()=>{
    console.log("Port Works!");
});


if(connection){
  console.log("DB Works!");
}
else{
  console.log("DB does not Work!");
}


App.get("/",(req,res)=>{
    res.send("Image-Upload!")
});
