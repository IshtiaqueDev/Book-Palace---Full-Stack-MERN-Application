const express=require("express");
const bookController=require("../controllers/books")
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();
const {isBookOwner,isLoggedIn}=require("../utils/middlewares")
const validateBook=require("../schemas/bookSchemaValidation");
const upload = require("../cloudConfig");

router.route("/").get(wrapAsync(
    bookController.getAllBooks
)).post( upload.fields([
    { name: "image", maxCount: 1 },
    { name: "bookPDF", maxCount: 1 }
  ]),wrapAsync(
    bookController.addBook
))

router.get("/mybooks",isLoggedIn,wrapAsync(
    bookController.getMyBooks
))


router.get("/:id",wrapAsync(
    bookController.getBook
));

router.get("/getBook/:id",wrapAsync(
    bookController.getBook
))

router.put("/edit/:id",upload.fields([
    { name: "image", maxCount: 1 },
    { name: "bookPDF", maxCount: 1 }
  ]),isLoggedIn,isBookOwner,wrapAsync(
    bookController.editBookRoute  
))

router.get("/relatedbook/:category",wrapAsync(
    bookController.getCategoryBooks
))


router.delete("/delete/:id",isLoggedIn,isBookOwner,wrapAsync(
    bookController.deleteBook
))


module.exports=router;