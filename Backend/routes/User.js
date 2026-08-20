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
            res.locals.user=user;
            if (err) return next(err);
             res.json({
                message: "LoggedIn Successfully!",
                user:req.user
            });
        });
    })(req, res, next);
});


router.get("/logout",(req,res)=>{
    req.logout((err)=>{
      if(err){
            res.status(500).json({ error: err.message });
      }
      res.locals.user=null;
       res.json({
        message:"Logout Successfully!"
    })
    })
})


router.get("/me",(req,res)=>{
  res.json({user:res.locals.user});
})

module.exports=router;

