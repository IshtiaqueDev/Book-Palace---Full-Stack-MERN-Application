const mongoose=require("mongoose");

const reviewSchema=new mongoose.Schema({
    comment:{
        type:String,
        require:true
    },rating:{
        type:Number,
        required:true
    },createdOn:{
        type:Date,
        default:Date.now()
    },author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    }
})


const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;