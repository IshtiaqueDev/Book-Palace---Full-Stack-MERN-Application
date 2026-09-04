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
   image: {
        url: String,
        public_id: String
    },
    bookPDF: {
        url: String,
        public_id: String,
        size: Number,
        format: String
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    author:{
          type:String,
        required:true
    },category:{
        type:String,
        required:true
    }
})


let Books=mongoose.model("Book",bookSchema);

module.exports=Books;