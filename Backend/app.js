if(process.env.NODE_ENV!="production"){
require('dotenv').config();
}
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
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server is Listening...");
})


const dbUrl=process.env.DBURL;
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);


const allowedOrigins = [
    "http://localhost:5173",
    "https://book-palace-full-stack-mern-applica.vercel.app"
];


// Regex to cover preview deployments on Vercel
const vercelPreviewPattern = /^https:\/\/book-palace-full-stack-mern-applica(?:-[a-z0-9-]+)?\.vercel\.app$/;

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        const isAllowed = allowedOrigins.includes(origin) || vercelPreviewPattern.test(origin);
        if (isAllowed) {
            return callback(null, true);
        } else {
            return callback(null, false);
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));



app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'development-only-secret',
  resave: false,
  saveUninitialized: true,
  cookie:{
         expires:Date.now()+7*24*60*60*1000,
         maxAge:7*24*60*60*1000,
         httpOnly:true,
        secure: true, 
        sameSite: 'none',   
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
    res.json({
        err:err.message
    });
})