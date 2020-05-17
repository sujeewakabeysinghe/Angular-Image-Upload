const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Image=new Schema();


const Images=module.exports=Mongoose.model("images",Image);


module.exports.upload=function(image,callback){

  console.log(image);
  Images.insertOne(image,callback);
};
