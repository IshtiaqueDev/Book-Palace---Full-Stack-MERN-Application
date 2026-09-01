const Review=require("../models/reviews");

module.exports.addReview=async(req,res)=>{
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
}

module.exports.getAllReviews=async(req,res)=>{
    let allReviews=await Review.find({});
    res.json({
        review:allReviews
    })
}


module.exports.getBookReviews=async(req,res)=>{
    const {id}=req.params;
    const reviews=await Review.find({bookId:id}).populate('author','username');
    res.json({
        reviews:reviews
    })
}


module.exports.deleteReview=async(req,res)=>{
    console.log("Request Reached~");
    await Review.findByIdAndDelete(req.params.id);
    res.json({
        message:"Review Deleted Successfully!"
    });
}

