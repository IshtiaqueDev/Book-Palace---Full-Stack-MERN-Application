const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const router=express.Router();

router.route("/signup").post(async(req,res)=>{
    const userData=req.body;
    console.log(userData);
    res.json({message:"Signup Successfully"})
})

module.exports=router;