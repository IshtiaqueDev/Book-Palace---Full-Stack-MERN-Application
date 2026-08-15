const express=require("express");
const session=require("express-session");
const passport=require("passport");
const cors=require("cors");
const User=require("./models/User");
const connectDB=require("./config/db")
const LocalStrategy=require("passport-local");
const app=express();
const UserRouter=require("./routes/User");
const booksRouter=require("./routes/books");
const port=5000;

app.listen(port,()=>{
    console.log("Server is Listening...");
})

app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: true,
  cookie:{
         expires:Date.now()+7*24*60*60*1000,
         maxAge:7*24*60*60*1000,
         httpOnly:true,
    },
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.json());

app.use("/books",booksRouter);
app.use("/user",UserRouter);

// app.get("/fakeUser",async(req,res)=>{
//     let fakeUser=({
//         email:"fake@gmail.com",
//         username:"fakeuser"
//     })
//     const registeredUser=await User.register(fakeUser,"123");   
//     console.log(registeredUser);
//     res.send(registeredUser);
// })


app.use((err,req,res,next)=>{
    console.log(err);
})