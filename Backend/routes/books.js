const express=require("express");
const bookController=require("../controllers/books")
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();
const Book=require("../models/books");
const {isBookOwner,isLoggedIn}=require("../utils/middlewares")
const validateBook=require("../schemas/bookSchemaValidation");

router.route("/").get(wrapAsync(
    bookController.getAllBooks
)).post(wrapAsync(
    bookController.addBook
))

router.get("/mybooks",isLoggedIn,wrapAsync(async(req,res)=>{
    console.log("Request Reached");
    const id=req.user._id;
    console.log(id)
    let books=await Book.find({postedBy :id});
    console.log(books)
    res.json({
        myBooks:books
    })
}))


router.get("/:id",wrapAsync(
    bookController.getBook
));

router.get("/getBook/:id",wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const book=await Book.find({_id:id});
    res.json({
        book:book
    })
}))

router.put("/edit/:id",isLoggedIn,isBookOwner,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const bookData=req.body;
    await Book.findByIdAndUpdate(id,bookData);
    res.json({
        message:"Book Updated Successfully!"
    })
}))

router.get("/relatedbook/:category",wrapAsync(async(req,res)=>{
    const {category}=req.params;
    const relatedBooks=await Book.find({category:category})
    res.json({
        relatedBooks:relatedBooks
    })
}))




router.delete("/delete/:id",isLoggedIn,isBookOwner,wrapAsync(async(req,res)=>{
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