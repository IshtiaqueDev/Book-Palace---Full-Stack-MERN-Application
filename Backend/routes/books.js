const express=require("express");
const bookController=require("../controllers/books")
const wrapAsync=require("../utils/wrapAsync");
const validateBook=require("../schemas/bookSchemaValidation")
const router=express.Router();

router.route("/").get(wrapAsync(
    bookController.getAllBooks
)).post(wrapAsync(
    bookController.addBook
))

router.get("/:id",wrapAsync(
    bookController.getBook
));

// router.post("/add",wrapAsync(
//     async(req,res)=>{
//         const bookData=req.body;
//         console.log(bookData);
//     }
// ))

module.exports=router;