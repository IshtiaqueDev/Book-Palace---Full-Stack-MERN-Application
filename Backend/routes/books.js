const express=require("express");
const bookController=require("../controllers/books")
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();

router.get(("/"),wrapAsync(
    bookController.getAllBooks
))

router.post(("/add"),wrapAsync(
    async(req,res)=>{
        const bookData=req.body;
        console.log(bookData);
    }
))

module.exports=router;