const express=require("express");
const Book=require("./models/books");
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/User");
const app=express();
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


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/books",(req,res)=>{
    let allBooks=Book.find({});
    res.json({allBooks:allBooks})
})

app.get("/fakeUser",async(req,res)=>{
    let fakeUser=({
        email:"fake@gmail.com",
        username:"fakeuser"
    })
    const registeredUser=await User.register(fakeUser,"123");   
    console.log(registeredUser);
    res.send(registeredUser);
})

app.get("/login/:username/:password",async(req,res)=>{
    try{
    let {username,password}=req.params;
    let user=new User({
    username:username,password:password
    })
    req.login(user,(err)=>{    
        if(err){
            console.log(err);
        }
        res.send("Loginned");
    }
    )}catch(err){
        console.log(err);
    }
})

app.post("/books/add",(req,res)=>{
    
})

app.use((err,req,res,next)=>{
    console.log(err);
})