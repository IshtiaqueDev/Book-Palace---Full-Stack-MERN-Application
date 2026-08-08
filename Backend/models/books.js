const mongoose=require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/BookPalace")
}
main().then(()=>{
    console.log("database connected successfully...");
}).catch((err)=>{
    console.log(err);
})


let bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
          type:String,
        required:true
    },
    imageUrl:{
          type:String,
        required:true
    },
    author:{
          type:String,
        required:true
    }
})


let Books=mongoose.model("Book",bookSchema);

module.exports=Books;