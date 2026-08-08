const express=require("express");
const Book=require("./models/books");
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