const mongoose=require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/BookPalace")
}
main().then(()=>{
    console.log("database connected successfully...");
}).catch((err)=>{
    console.log(err);
})


module.exports = main;