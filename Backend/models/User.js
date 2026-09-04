const mongoose=require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose').default;

let userSchema=new mongoose.Schema({
    email:{type:String,required:true},
    favouriteBooks:[
        {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
})

userSchema.plugin(passportLocalMongoose);
let User=mongoose.model("User",userSchema);

module.exports=User;