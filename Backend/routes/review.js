const express=require("express");
const router=express.Router();
const Review=require("../models/reviews");
const Book = require("../models/books");
const {isLoggedIn,isReviewOwner}=require("../utils/middlewares");
const validateReviews=require("../schemas/validateReview");
const wrapAsync = require("../utils/wrapAsync");

router.post("/:id/add",async(req,res)=>{
    const {id}=req.params;
    console.log(id);
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



router.get('/:id/getall',wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const reviews=await Review.find({bookId:id}).populate('author','username');
    res.json({
        reviews:reviews
    })
}))


router.delete("/delete/:id",isLoggedIn,isReviewOwner,async(req,res)=>{
    console.log("Request Reached~");
    await Review.findByIdAndDelete(req.params.id);
    res.json({
        message:"Review Deleted Successfully!"
    });
})

module.exports=router;