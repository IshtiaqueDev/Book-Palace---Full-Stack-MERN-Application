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
    },category:{
        type:String,
        required:true
    },reviews: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }
]
})


let Books=mongoose.model("Book",bookSchema);

module.exports=Books;