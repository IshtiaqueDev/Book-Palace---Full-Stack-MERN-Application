const Book = require("../models/books");

module.exports.getAllBooks=async(req,res)=>{
    let allBooks=await Book.find({});
    res.json({allBooks})
}

module.exports.getBook=async(req,res)=>{
    const {id}=req.params;
    let book=await Book.findOne({_id:id}).populate("postedBy","username");
    res.json(book);
}


module.exports.addBook=async(req,res)=>{
    let book=new Book({
        ...req.body,
        postedBy:req.user._id
    });
    let result=await book.save()
    res.json({message:"Book Added Successfully"});
}

