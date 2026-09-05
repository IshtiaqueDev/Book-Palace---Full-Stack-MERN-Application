const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();
const UserController=require("../controllers/user");
const {isLoggedIn}=require("../utils/middlewares");

router.route("/signup").post(wrapAsync(
    UserController.signUp
))

router.post("/login",
     UserController.userLogin
    );


router.get("/logout",
     UserController.logout
    ); 


router.get("/me",(req,res)=>{
  res.json({
    user:req.user||null
});
})

router.put("/favourites/:bookId",isLoggedIn,wrapAsync(
    UserController.toggleFavourite
));

router.get("/favourites",isLoggedIn,wrapAsync(
    UserController.getFavouriteBooks
));

module.exports=router;

