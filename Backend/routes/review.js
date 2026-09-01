const express=require("express");
const router=express.Router();
const {isLoggedIn,isReviewOwner}=require("../utils/middlewares");
const validateReviews=require("../schemas/validateReview");
const ReviewController=require("../controllers/review")
const wrapAsync = require("../utils/wrapAsync");

router.post("/:id/add",validateReviews,wrapAsync(
    ReviewController.addReview
))

router.get('/',wrapAsync(
    ReviewController.getAllReviews
))


router.get('/:id/getall',wrapAsync(
    ReviewController.getBookReviews
))


router.delete("/delete/:id",isLoggedIn,isReviewOwner,wrapAsync(
    ReviewController.deleteReview
))

module.exports=router;