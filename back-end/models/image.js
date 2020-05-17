const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Image=new Schema({
  data:{type:Buffer,required:true},
  contentType:{type:String,required:true}
});


const Images=module.exports=Mongoose.model("images",Image);


module.exports.upload=function(image,callback){
  image.save(callback);
};
