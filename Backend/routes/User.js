const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const User=require("../models/User")
const router=express.Router();
const passport=require("passport");

router.route("/signup").post(wrapAsync(async(req,res)=>{
    const userData=req.body;
    let user=await User.register({
        username:userData.username,
        email:userData.email,
    },userData.password);
    console.log(user);
    res.json({message:"Signup Successfully"})
}))

router.post("/login", (req, res, next) => {
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
});


router.get("/logout", (req, res, next) => {
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
}); 


router.get("/me",(req,res)=>{
  res.json({
    user:req.user||null
});
})

module.exports=router;

