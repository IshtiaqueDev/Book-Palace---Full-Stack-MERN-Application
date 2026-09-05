const User=require("../models/User");
const Book=require("../models/books");
const passport=require("passport")

module.exports.userLogin=(req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) return next(err);
        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password",
            });
        }
        req.login(user, (err) => {
            if (err) return next(err);
             res.json({
                message: "LoggedIn Successfully!",
                user:req.user
            });
        });
    })(req, res, next);
}


module.exports.logout=(req, res, next) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie("connect.sid");
            
           return res.status(200).json({
                message: "Logout Successfully!"
            });
        });
    }); 
}


module.exports.signUp=async(req,res)=>{
    const userData=req.body;
    let user=await User.register({
        username:userData.username,
        email:userData.email,
    },userData.password);
    console.log(user);
    res.json({message:"Signup Successfully"})
}

module.exports.toggleFavourite=async(req,res)=>{
    const {bookId}=req.params;
    const book=await Book.findById(bookId);

    if(!book){
        return res.status(404).json({message:"Book not found"});
    }

    const favouriteBooks=req.user.favouriteBooks || [];
    const isFavourite=favouriteBooks.some(
        (favouriteBookId)=>favouriteBookId.toString()===bookId
    );
    const update=isFavourite
        ? {$pull:{favouriteBooks:book._id}}
        : {$addToSet:{favouriteBooks:book._id}};

    const user=await User.findByIdAndUpdate(req.user._id,update,{new:true})
        .populate("favouriteBooks");

    res.json({
        message:isFavourite?"Removed from favourites":"Added to favourites",
        user,
        isFavourite:!isFavourite
    });
}

module.exports.getFavouriteBooks=async(req,res)=>{
    const user=await User.findById(req.user._id).populate("favouriteBooks");

    res.json({
        favouriteBooks:user.favouriteBooks
    });
}