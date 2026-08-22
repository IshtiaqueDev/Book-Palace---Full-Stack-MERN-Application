const express=require("express");
const bookController=require("../controllers/books")
const wrapAsync=require("../utils/wrapAsync");
const validateBook=require("../schemas/bookSchemaValidation")
const router=express.Router();
const Book=require("../models/books");

router.route("/").get(wrapAsync(
    bookController.getAllBooks
)).post(wrapAsync(
    bookController.addBook
))

router.get("/:id",wrapAsync(
    bookController.getBook
));

router.get("/relatedbook/:category",wrapAsync(async(req,res)=>{
    const {category}=req.params;
    const relatedBooks=await Book.find({category:category})
    res.json({
        relatedBooks:relatedBooks
    })
}))


router.delete("/delete/:id",wrapAsync(async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    await Book.findByIdAndDelete(id);
    res.json({
        message:"Deleted Successfully!"
    })
}))

// router.post("/add",wrapAsync(
//     async(req,res)=>{
//         const bookData=req.body;
//         console.log(bookData);
//     }
// ))

module.exports=router;