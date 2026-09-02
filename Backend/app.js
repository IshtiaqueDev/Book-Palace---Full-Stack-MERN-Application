if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const LocalStrategy = require("passport-local");
const dns = require("dns");

const User = require("./models/User");
const reviewRouter = require("./routes/review");
const connectDB = require("./config/db");
const UserRouter = require("./routes/User");
const booksRouter = require("./routes/books");

const app = express();

// Required on Railway for secure cookies and sessions behind reverse proxies
app.set("trust proxy", 1);

// Optional custom DNS resolution
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Connect to MongoDB
connectDB();

// CORS Setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://book-palace-full-stack-mern-application.vercel.app",
];

const vercelPattern = /^https:\/\/book-palace-full-stack-mern-application(-[a-z0-9]+)*\.vercel\.app$/;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || vercelPattern.test(origin)) {
      return callback(null, true);
    }
    // Cleanly reject without throwing a server crash exception
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "development-only-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
);

// Passport Auth
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

// Routes
app.use("/books", booksRouter);
app.use("/user", UserRouter);
app.use("/reviews", reviewRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.message || "Internal Server Error",
  });
});

// Start Server at the very bottom
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});