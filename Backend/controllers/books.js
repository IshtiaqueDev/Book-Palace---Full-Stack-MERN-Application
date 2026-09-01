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

module.exports.getMyBooks=async(req,res)=>{
    console.log("Request Reached");
    const id=req.user._id;
    console.log(id)
    let books=await Book.find({postedBy :id});
    console.log(books)
    res.json({
        myBooks:books
    })
}


module.exports.editBookRoute=async(req,res)=>{
    let {id}=req.params;
    const bookData=req.body;
    await Book.findByIdAndUpdate(id,bookData);
    res.json({
        message:"Book Updated Successfully!"
    })
}


module.exports.getCategoryBooks=async(req,res)=>{
    const {category}=req.params;
    const relatedBooks=await Book.find({category:category})
    res.json({
        relatedBooks:relatedBooks
    })
}

module.exports.deleteBook=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    await Book.findByIdAndDelete(id);
    res.json({
        message:"Deleted Successfully!"
    })
}

module.exports.getBook=async(req,res)=>{
    const {id}=req.params;
    const book=await Book.find({_id:id});
    res.json({
        book:book
    })
}