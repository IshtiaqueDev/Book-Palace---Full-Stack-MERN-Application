const Book = require("../models/books");

module.exports.getAllBooks=async(req,res)=>{
    let allBooks=await Book.find({});
    res.json({allBooks})
}

module.exports.getBook=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    let book=await Book.findOne({_id:id});
    console.log(book);
    res.json(book);
}

