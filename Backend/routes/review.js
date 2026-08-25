const express=require("express");
const router=express.Router();
const Review=require("../models/reviews");
const Book = require("../models/books");

router.post("/:id/add",async(req,res)=>{
    const {id}=req.params;
    let review=new Review({
        ...req.body,
        author:req.user._id,
        bookId:id
    });
    let newReview=await review.save();
    res.json({
        message:"Review Added Successfully!"
    })
})

router.get('/',async(req,res)=>{
    let allReviews=await Book.find({});
    res.json({
        review:allReviews
    })
})

router.delete("/delete/:id",async(req,res)=>{
    await Review.findByIdAndDelete(req.params.id);
    res.json({
        message:"Review Deleted Successfully!"
    });
})

module.exports=router;