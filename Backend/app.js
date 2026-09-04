if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const reviewRouter = require("./routes/review");
const connectDB = require("./config/db");
const UserRouter = require("./routes/User");
const booksRouter = require("./routes/books");

const app = express();
app.set("trust proxy", 1);
connectDB();

const corsOptions = {
//   origin: "https://book-palace-full-stack-mern-applica.vercel.app",
  origin: "http://localhost:5173",
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "development-only-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  console.log("DESERIALIZE ID:", id);
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use("/books", booksRouter);
app.use("/user", UserRouter);
app.use("/reviews", reviewRouter);

app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.message || "Internal Server Error" });
});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0",() => {
  console.log(`Server listening on port ${port}`);
});