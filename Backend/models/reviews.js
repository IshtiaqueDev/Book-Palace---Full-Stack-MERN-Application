const mongoose=require("mongoose");

const reviewSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },rating:{
        type:Number,
        default:1,
        min:1,
        max:5,
        required:true
    },createdOn:{
        type:Date,
        default:Date.now
    },author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }
})


const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;