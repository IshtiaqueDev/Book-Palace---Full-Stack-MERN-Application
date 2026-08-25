const express=require("express");
const session=require("express-session");
const passport=require("passport");
const cors=require("cors");
const User=require("./models/User");
const reviewRouter=require("./routes/review")
const connectDB=require("./config/db")
const LocalStrategy=require("passport-local");
const app=express();
const UserRouter=require("./routes/User");
const booksRouter=require("./routes/books");
const port=5000;

app.listen(port,()=>{
    console.log("Server is Listening...");
})


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

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


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});
app.use(express.json());

app.use("/books",booksRouter);
app.use("/user",UserRouter);
app.use("/reviews",reviewRouter);

app.use((err,req,res,next)=>{
     res.status(400).json({
        message: err.message
    });
})