const Book = require("../models/books");
const wrapAsync = require("../utils/wrapAsync");
const cloudinary = require("cloudinary").v2;

module.exports.getAllBooks = async (req, res) => {
    let allBooks = await Book.find({});
    res.json({ allBooks });
};

module.exports.getBook = async (req, res) => {
    const { id } = req.params;
    let book = await Book.findOne({ _id: id })
        .populate("postedBy", "username");
    res.json(book);
};

module.exports.addBook = async (req, res) => {
    const image = req.files?.image?.[0];
    const pdf = req.files?.bookPDF?.[0];

    if (!image || !pdf) {
        return res.status(400).json({
            message: "Please upload both a cover image and a PDF file."
        });
    }

    const { title, description, author, category } = req.body;
    if (!title || !description || !author || !category) {
        return res.status(400).json({
            message: "Title, description, author, and category are required."
        });
    }

    let book = new Book({
        title,
        description,
        author,
        category,
        postedBy: req.user._id,
        image: {
            url: image.path,
            public_id: image.filename
        },
        bookPDF: {
            url: pdf.path,
            public_id: pdf.filename,
            size: pdf.size,
            format: "pdf"
        }
    });
    await book.save();
    res.json({
        message: "Book Added Successfully"
    });
};

module.exports.getMyBooks = async (req, res) => {
    console.log("Request Reached");
    const id = req.user._id;
    console.log(id);
    let books = await Book.find({ postedBy: id });
    console.log(books);
    res.json({
        myBooks: books
    });
};


module.exports.editBookRoute = async (req, res) => {
    let { id } = req.params;
    const book = await Book.findById(id);
    Object.assign(book, req.body);
    if (req.files?.image) {
    if (book.image?.public_id) {
        await cloudinary.uploader.destroy(book.image.public_id, {
            resource_type: "image"
        });
    }
    const image = req.files.image[0];
    book.image = {
        url: image.path,
        public_id: image.filename
    };
}
    if (req.files?.bookPDF) {
        if (book.bookPDF?.public_id) {
            await cloudinary.uploader.destroy(book.bookPDF.public_id, {
                resource_type: "raw"
            });
        }
        const pdf = req.files.bookPDF[0];
        book.bookPDF = {
            url: pdf.path,
            public_id: pdf.filename,
            size: pdf.size,
            format: "pdf"
        };
    }
    await book.save();
    res.json({
        message: "Book Updated Successfully!"
    });
};


module.exports.getCategoryBooks = async (req, res) => {
    const { category } = req.params;
    const relatedBooks = await Book.find({
        category: category
    });
    res.json({
        relatedBooks: relatedBooks
    });
};


module.exports.deleteBook = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    
    if(!book){
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (book.bookPDF?.public_id) {
        await cloudinary.uploader.destroy(book.bookPDF.public_id, {
            resource_type: "raw"
        });
    }
    if (book.image?.public_id) {
        await cloudinary.uploader.destroy(book.image.public_id, {
            resource_type: "image"
        });
    }
    await Book.findByIdAndDelete(id);
    
    res.json({
        message: "Deleted Successfully!"
    });
});