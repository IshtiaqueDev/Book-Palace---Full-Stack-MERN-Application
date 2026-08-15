const Book = require("../models/books");

module.exports.getAllBooks=async(req,res)=>{
    let allBooks=await Book.find({});
    res.json({allBooks})
}

