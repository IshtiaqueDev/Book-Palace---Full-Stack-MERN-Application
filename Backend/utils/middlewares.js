const Book=require("../models/books");
const User=require("../models/User");
const Review=require("../models/reviews");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        return next(new Error("Please Login Before Performing any action"))
    }
    next();
}


module.exports.isBookOwner=async(req,res,next)=>{
    const {id}=req.params;
    const book=await Book.findById(id);
      if (!book) {
        return next(new Error("Book not found"));
    }
    if(req.user._id.equals(book.postedBy)){
        return next();
    }
    return next(new Error("You are not owner of this Book"));
}


module.exports.isReviewOwner=async(req,res,next)=>{
    const {id}=req.params;
    const review=await Review.findOne({_id:id});
    if(!req.user._id.equals(review.author)){
        return next(new Error("You cannot delete this review!"));
    }
    next();
}
