const mongoose=require("mongoose");

let bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
          type:String,
        required:true
    },
    imageUrl:{
          type:String,
        required:true
    },
    author:{
          type:String,
        required:true
    },postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },postedOn:{
        type:Date,
        default:Date.now()
    },reviews: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }
]
})


let Books=mongoose.model("Book",bookSchema);

module.exports=Books;