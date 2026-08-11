const express=require("express");
const Book=require("./models/books");
const session=require("express-session");
const app=express();
const port=5000;

app.listen(port,()=>{
    console.log("Server is Listening...");
})


app.get("/books",(req,res)=>{
    let allBooks=Book.find({});
    res.json({allBooks:allBooks})
})

app.post("/books/add",(req,res)=>{
    
})

app.use((err,req,res,next)=>{
    console.log(err);
})