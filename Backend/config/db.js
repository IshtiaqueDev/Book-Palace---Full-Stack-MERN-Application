const mongoose=require("mongoose");

async function main() {
    await mongoose.connect(process.env.DB_URL)
}
main().then(()=>{
    console.log("database connected successfully...");
}).catch((err)=>{
    console.log(err);
})


module.exports = main;