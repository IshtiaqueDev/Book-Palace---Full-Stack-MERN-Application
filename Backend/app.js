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

// 1. Required for secure cross-site cookies behind Railway reverse proxy
app.set("trust proxy", 1);

// 2. Connect Database
connectDB();

// 3. CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://book-palace-full-stack-mern-application.vercel.app",
];

// Matches your Vercel production and all preview deployment URLs
const vercelPattern = /^https:\/\/book-palace-full-stack-mern-application(-[a-z0-9]+)*\.vercel\.app$/;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || vercelPattern.test(origin)) {
      return callback(null, true);
    }
    // Return null, false to safely reject without crashing the Node process
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// 4. Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Session Setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "development-only-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  })
);

// 6. Passport Authentication
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

// 7. Mount Routes
app.use("/books", booksRouter);
app.use("/user", UserRouter);
app.use("/reviews", reviewRouter);

// Health check endpoint for testing backend directly
app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// 8. Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.message || "Internal Server Error",
  });
});

// 9. Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});